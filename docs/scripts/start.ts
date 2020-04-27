import * as TypeDoc from 'typedoc';
import * as Path from 'path';
import * as FS from 'fs';
import * as TypeScript from 'typescript';

type output = {
  [key: string]: string;
};

const output: output = {
  all: Path.resolve(__dirname, './data/all.json'),
  components: Path.resolve(__dirname, './data/components.json'),
  hooks: Path.resolve(__dirname, './data/hooks.json')
};

const typedocApp = new TypeDoc.Application();

typedocApp.bootstrap({
  mode: 'file',
  readme: 'none',
  jsx: TypeScript.JsxEmit.React,
  esModuleInterop: true,
  ignoreCompilerErrors: true,
  tsconfig: '../packages/react-day-picker/tsconfig.json',
  exclude: ['*.test.ts', 'node_modules']
});

const inputPath = Path.resolve(
  __dirname,
  '../../packages/react-day-picker/src'
);

const project = typedocApp.convert(typedocApp.expandInputFiles([inputPath]));

if (!project) {
  throw new Error('Project not found');
}

typedocApp.generateJson(project, output.all);
const json = require(output.all);

type reflection = {
  [key: string]: object;
};

function findFunctions(jsonProject: object, categoryTitle: string) {
  const functionsGroup = json.groups?.find(
    (group: { title: string }) => group.title === 'Functions'
  );
  const category = functionsGroup.categories.find(
    (category: { title: string }) =>
      category.title.toLowerCase() === categoryTitle
  );
  const ids = category.children;
  const reflections = ids.map((id: number) =>
    json.children?.find((child: { id: number }) => child.id === Number(id))
  );

  const reflectionsFunctions: reflection = {};

  reflections.forEach((reflection: { signatures: any; sources: any }) => {
    const {
      flags,
      id,
      name,
      parameters,
      type,
      comment
    } = reflection.signatures[0];

    reflectionsFunctions[name] = {
      flags,
      id,
      name,
      parameters,
      type,
      comment,
      sources: reflection.sources
    };
  });

  return reflectionsFunctions;
}

['hooks', 'components'].map((type) => {
  const functions = findFunctions(json, type);
  FS.writeFile(output[type], JSON.stringify(functions, null, 2), (err: any) => {
    if (err) {
      return console.error(err);
    }
    console.log('JSON with %s written to %s', type, output[type]);
  });
});

// console.log(JSON.stringify(componentsSignatures, null, 2));

// console.log(parsedComponents);
// console.log(parsedComponents?.[0]);

// console.log(json.children);

// export function getComponents(project: TypeDoc.ProjectReflection) {
//   return json.children?.map(
//     (child: { title: string }) => child.title === 'Functions'
//   );
// }

// console.log(getComponents(project));
