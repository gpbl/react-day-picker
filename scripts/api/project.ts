import { Project } from 'ts-morph';

const project = new Project();
project.addSourceFilesFromTsConfig('./../tsconfig.build.json');

export { project };
