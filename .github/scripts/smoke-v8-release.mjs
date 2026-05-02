/* eslint-env node */
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const command = process.argv[2];

if (!command) {
  throw new Error('Expected a smoke test command.');
}

const env = {
  ...process.env,
  NPM_CONFIG_CACHE:
    process.env.NPM_CONFIG_CACHE || join(tmpdir(), 'rdp-v8-npm-cache')
};

function run(binary, args, cwd) {
  execFileSync(binary, args, { cwd, env, stdio: 'inherit' });
}

function packTarball() {
  const destination =
    process.env.RUNNER_TEMP || mkdtempSync(join(tmpdir(), 'rdp-pack-'));
  const filename = execFileSync(
    'npm',
    ['pack', '--pack-destination', destination, '--silent'],
    { encoding: 'utf8' }
  )
    .trim()
    .split('\n')
    .pop();

  return join(destination, filename);
}

function createConsumer(tarball) {
  const directory = mkdtempSync(join(tmpdir(), 'rdp-consumer-'));

  copyFileSync(tarball, join(directory, 'react-day-picker.tgz'));
  writeFileSync(
    join(directory, 'package.json'),
    `${JSON.stringify({ private: true, type: 'commonjs' }, null, 2)}\n`
  );

  return directory;
}

function installConsumer(directory, dependencies) {
  run(
    'npm',
    ['install', '--ignore-scripts', './react-day-picker.tgz', ...dependencies],
    directory
  );
}

function writeTypescriptConfig(directory) {
  writeFileSync(
    join(directory, 'tsconfig.json'),
    `${JSON.stringify(
      {
        compilerOptions: {
          strict: true,
          jsx: 'react-jsx',
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
          target: 'ES2022',
          skipLibCheck: false,
          noEmit: true
        },
        include: ['src']
      },
      null,
      2
    )}\n`
  );
}

function writeTypescriptFixture(directory, options) {
  mkdirSync(join(directory, 'src'));

  const multiplePicker = options.includeMultiple
    ? `
export function MultiplePicker() {
  const [selected, setSelected] = useState<Date[]>();
  return <DayPicker mode="multiple" selected={selected} onSelect={setSelected} />;
}
`
    : '';

  const customDayContentPicker = options.includeCustomDayContent
    ? `
export function CustomDayContentPicker() {
  return (
    <DayPicker
      components={{
        DayContent(props) {
          return <span>{props.date.getDate()}</span>;
        }
      }}
    />
  );
}
`
    : '';

  writeFileSync(
    join(directory, 'src/index.tsx'),
    `import { createRef, useState } from "react";
import { DayPicker, type ButtonProps, type DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

const buttonRef = createRef<HTMLButtonElement>();
const buttonProps: ButtonProps = { ref: buttonRef, type: "button" };
void buttonProps;

export function SinglePicker() {
  const [selected, setSelected] = useState<Date>();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
}
${multiplePicker}
export function RangePicker() {
  const [selected, setSelected] = useState<DateRange>();
  return <DayPicker mode="range" selected={selected} onSelect={setSelected} />;
}
${customDayContentPicker}`
  );
}

function runTypescriptSmoke(tarball, options) {
  const directory = createConsumer(tarball);

  installConsumer(directory, [
    `react@${options.react}`,
    `react-dom@${options.react}`,
    `date-fns@${options.dateFns}`,
    'typescript@^5',
    `@types/react@${options.reactTypes}`,
    `@types/react-dom@${options.reactDomTypes}`
  ]);

  writeTypescriptConfig(directory);
  writeTypescriptFixture(directory, options);
  run('npx', ['tsc', '--noEmit'], directory);
}

function writeRuntimeFixture(directory) {
  writeFileSync(
    join(directory, 'smoke.mjs'),
    `import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { JSDOM } = require("jsdom");

const dom = new JSDOM('<div id="root"></div>');
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.Node = dom.window.Node;
Object.defineProperty(globalThis, "navigator", {
  value: dom.window.navigator,
  configurable: true
});

const React = require("react");
const { flushSync } = require("react-dom");
const { createRoot } = require("react-dom/client");
const { DayPicker } = require("react-day-picker");

const container = document.getElementById("root");
const root = createRoot(container);

flushSync(() => {
  root.render(React.createElement(DayPicker, { month: new Date(2024, 0, 1) }));
});

if (!container.querySelector(".rdp")) {
  throw new Error("DayPicker did not render its root element.");
}

root.unmount();
`
  );
}

function runRuntimeSmoke(tarball, options) {
  const directory = createConsumer(tarball);

  installConsumer(directory, [
    `react@${options.react}`,
    `react-dom@${options.react}`,
    `date-fns@${options.dateFns}`,
    'jsdom@^24.1.3'
  ]);

  writeRuntimeFixture(directory);
  run('node', ['smoke.mjs'], directory);
}

const tarball = packTarball();

switch (command) {
  case 'react19-runtime':
    runRuntimeSmoke(tarball, { react: '19', dateFns: '3' });
    runRuntimeSmoke(tarball, { react: '19', dateFns: '2' });
    break;

  case 'react19-types':
    runTypescriptSmoke(tarball, {
      react: '19',
      reactTypes: '19',
      reactDomTypes: '19',
      dateFns: '3',
      includeMultiple: false,
      includeCustomDayContent: false
    });
    break;

  case 'react18-types':
    for (const dateFns of ['2', '3']) {
      runTypescriptSmoke(tarball, {
        react: '18',
        reactTypes: '18',
        reactDomTypes: '18',
        dateFns,
        includeMultiple: true,
        includeCustomDayContent: true
      });
    }
    break;

  default:
    throw new Error(`Unknown smoke test command: ${command}`);
}
