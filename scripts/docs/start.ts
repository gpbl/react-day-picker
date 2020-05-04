#!/usr/bin/env babel-node
import * as Path from 'path';
import * as Commander from 'commander';

import { createProject } from './createProject';
import { writeComponents } from './writeComponents';
import { configure } from './templates/configure';
import { writeEnumerations } from './writeEnumerations';
import { writeInterfaces } from './writeInterfaces';
import { writeTypeAliases } from './writeTypeAliases';

const program = new Commander.Command();
program
  .option(
    '-p, --project <path>',
    'set the project root',
    '../packages/react-day-picker'
  )
  .option(
    '-i, --input <path>',
    'set the project input files converted by typedoc',
    'src'
  )
  .option(
    '-c, --config <file>',
    'set the tsconfig.json path, relative to the project’s root',
    'tsconfig.json'
  )
  .option(
    '-o, --outDir <path>',
    'set the output directory',
    '../website/docs/api'
  )
  .action(() => {
    const projectPath = Path.resolve(program.project);
    const outputPath = Path.resolve(program.outDir);
    const inputPath = Path.resolve(projectPath, program.input);
    const configPath = Path.resolve(projectPath, program.config);

    configure();
    console.log('Creating project...');
    const project = createProject(inputPath, outputPath, configPath);
    writeComponents(project, outputPath);
    writeEnumerations(project, outputPath);
    writeTypeAliases(project, outputPath);
    writeInterfaces(project, outputPath);
    // writeHooks(project, outputPath);
  });

program.parse(process.argv);
