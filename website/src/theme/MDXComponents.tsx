import { useDocsVersion } from "@docusaurus/plugin-content-docs/client";
import MDXComponents from "@theme-original/MDXComponents";
import type { ComponentProps, ComponentType } from "react";
import * as CurrentExamples from "react-day-picker/examples";
import * as ExamplesV8 from "../../examples-v8";
import * as ExamplesV9 from "../../examples-v9";
import { BrowserWindow } from "../components/BrowserWindow";

type TableComponent = ComponentType<ComponentProps<"table">>;
type ExampleProps = Record<string, unknown>;
type ExampleComponent = ComponentType<ExampleProps>;
type ExampleModule = Record<string, ExampleComponent>;

const Table: TableComponent =
  (MDXComponents as { table?: TableComponent }).table ??
  ((props) => <table {...props} />);

const exampleModulesByVersion: Record<string, ExampleModule> = {
  current: ExamplesV9 as unknown as ExampleModule,
  next: CurrentExamples as unknown as ExampleModule,
};
const exampleComponentCache = new Map<string, ExampleComponent>();

function getVersionedExampleComponent(name: string): ExampleComponent {
  const cached = exampleComponentCache.get(name);
  if (cached) {
    return cached;
  }

  const VersionedExample: ExampleComponent = (props) => {
    const version = useDocsVersion();
    const examples =
      exampleModulesByVersion[version.version] ??
      (ExamplesV9 as unknown as ExampleModule);
    const Example =
      examples[name] ?? (ExamplesV9 as unknown as ExampleModule)[name];

    if (!Example) {
      return null;
    }

    return <Example {...props} />;
  };

  VersionedExample.displayName = `Examples.${name}`;
  exampleComponentCache.set(name, VersionedExample);
  return VersionedExample;
}

const Examples = new Proxy({} as ExampleModule, {
  get: (_, prop) => {
    if (typeof prop !== "string") {
      return undefined;
    }
    return getVersionedExampleComponent(prop);
  },
});

function ResponsiveTable(props: ComponentProps<typeof Table>) {
  return (
    <div className="table-scroll" role="presentation">
      <Table {...props} />
    </div>
  );
}

export default {
  ...MDXComponents,
  table: ResponsiveTable,
  BrowserWindow,
  Examples,
  ExamplesV8,
};
