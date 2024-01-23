import fs from 'node:fs';
import path from 'node:path';

import prettier from 'prettier';
import {
  InterfaceDeclaration,
  SyntaxKind,
  TypeAliasDeclaration
} from 'ts-morph';

import { createInterfaceDef } from './createInterfaceDef.ts';
import { project } from './project.ts';
import { getExportedDeclarations } from './utils/getExportedDeclarations.ts';
import { InterfaceDef, TypeAliasDef } from './types.ts';
import { createTypeAliasDef } from './createTypeAliasDef.ts';

async function writeToDisk(declarationName: string) {
  const declaration = getExportedDeclarations(project, declarationName)?.[0];
  if (!declaration) {
    throw new Error(`Could not find ${declarationName}`);
  }

  let def: InterfaceDef | TypeAliasDef;
  switch (declaration.getKind()) {
    case SyntaxKind.TypeAliasDeclaration:
      def = await createTypeAliasDef(declaration as TypeAliasDeclaration);
      break;
    // case SyntaxKind.EnumDeclaration:
    //   json = JSON.stringify(declaration.getText());
    //   break;
    // case SyntaxKind.VariableDeclaration:
    //   json = JSON.stringify(declaration.getText());
    //   break;
    // case SyntaxKind.FunctionDeclaration:
    //   json = JSON.stringify(declaration.getText());
    //   break;
    // case SyntaxKind.ClassDeclaration:
    //   json = JSON.stringify(declaration.getText());
    //   break;
    case SyntaxKind.InterfaceDeclaration: {
      def = await createInterfaceDef(declaration as InterfaceDeclaration);
      break;
    }
    default:
      throw new Error(
        `Unhandled declaration kind: ${SyntaxKind[declaration.getKind()]}`
      );
  }

  const json = JSON.stringify(def);
  const formattedSource = await prettier.format(json, {
    parser: 'json-stringify'
  });

  // if (declaration.isKind(SyntaxKind.InterfaceDeclaration)) {
  //   const interfaceDefs = await createInterfaceDef(declaration);

  //   const interfaceDefsJson = JSON.stringify(interfaceDefs);
  //   formattedSource = await prettier.format(interfaceDefsJson, {
  //     parser: 'json-stringify'
  //   });
  // }
  fs.writeFileSync(
    path.join(process.cwd(), '../website/data/api', `${declarationName}.json`),
    formattedSource
  );
}

// await writeToDisk('DayPickerProps');
await writeToDisk('PropsBase');
await writeToDisk('PropsSingle');
await writeToDisk('PropsMulti');
await writeToDisk('PropsRange');
