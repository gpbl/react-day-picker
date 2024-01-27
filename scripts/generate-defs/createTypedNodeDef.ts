import { Type, TypedNode, TypeFlags } from 'ts-morph';

import { project } from './project.ts';

function isSimpleType(type: Type): boolean {
  const flags = type.getFlags();
  return !!(
    flags &
    (TypeFlags.String |
      TypeFlags.Number |
      TypeFlags.Boolean |
      TypeFlags.Null |
      TypeFlags.Undefined |
      TypeFlags.StringLiteral |
      TypeFlags.NumberLiteral |
      TypeFlags.BooleanLiteral |
      TypeFlags.EnumLiteral)
  );
}

export interface TypedNodeDef {
  isSimpleTypeNode: boolean;
  typeNode: string | undefined;
  properties: { [key: string]: string } | undefined;
  signatures: string[] | undefined;
  members: string[] | undefined;
}

const typeChecker = project.getTypeChecker();

export async function createTypedNodeDef(typedNode: TypedNode) {
  const typeNode = typedNode.getTypeNode();
  const type = typeNode && typeChecker.getTypeAtLocation(typeNode);
  const isSimpleTypeNode = type ? isSimpleType(type) : false;

  let properties: { [key: string]: string } | undefined;
  let signatures: string[] | undefined;
  let members: string[] | undefined;

  // if (type) {
  //   typeName = typeChecker.typeToString(type);
  //   if (type.isObject()) {
  //     properties = type.getProperties().reduce(
  //       (props, symbol) => {
  //         props[symbol.getName()] = typeChecker.typeToString(
  //           typeChecker.getTypeOfSymbolAtLocation(
  //             symbol,
  //             symbol.valueDeclaration
  //           )
  //         );
  //         return props;
  //       },
  //       {} as { [key: string]: string }
  //     );
  //   }
  //   if (type.getCallSignatures().length > 0) {
  //     signatures = type
  //       .getCallSignatures()
  //       .map((signature) => typeChecker.signatureToString(signature));
  //   }
  //   if (type.isEnum()) {
  //     members =
  //       type.getSymbol().members?.map((member) => member.getName()) || [];
  //   }
  // }

  const typedNodeDef: TypedNodeDef = {
    typeNode: typeNode?.getText(),
    isSimpleTypeNode,
    properties,
    signatures,
    members
  };

  return typedNodeDef;
}
