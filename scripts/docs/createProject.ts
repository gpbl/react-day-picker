import * as TS from 'typescript';
import * as TD from 'typedoc';

/**
 * Filename in the output directory that contains all the typings in json
 * format.
 */
const ALL_FILENAME = 'all.json';

/**
 * Create a Typedoc project and save the reflections to the output dir.
 * Reflections are then returned as parsed JSON.
 */
export function createProject(
  inputPath: string,
  outputPath: string,
  tsconfigPath: string
): TD.ProjectReflection {
  const app = new TD.Application();

  app.bootstrap({
    mode: 'file',
    readme: 'none',
    jsx: TS.JsxEmit.React,
    esModuleInterop: true,
    ignoreCompilerErrors: true,
    tsconfig: tsconfigPath,
    exclude: ['*.test.ts', 'node_modules']
  });

  const project = app.convert(app.expandInputFiles([inputPath]));

  if (!project) throw new Error('Could not create a project.');

  const allPath = `${outputPath}/${ALL_FILENAME}`;
  app.generateJson(project, allPath);
  return require(allPath);
}
