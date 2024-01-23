import {
  SyntaxKind,
  Node,
  TypeAliasDeclaration,
  TypeReferenceNode,
  TypeParameterDeclaration
} from 'ts-morph';
import { TypeAliasDef } from './types.ts';
import { createNodeDef } from './createNodeDef.ts';
import { createJsDocDef } from './createJsDocDef.ts';

export async function createTypeAliasDef(
  typeDeclaration: TypeAliasDeclaration
) {
  const name = typeDeclaration.getName();

  const nodeDef = createNodeDef(typeDeclaration);
  const jsDocDef = await createJsDocDef(typeDeclaration);

  // let typeText = typeDeclaration.getTypeNode()?.getText() || '';

  // // Helper function to recursively traverse the AST
  // function traverse(node: Node) {
  //   if (
  //     node.getKind() === SyntaxKind.TypeReference &&
  //     !(node instanceof TypeParameterDeclaration)
  //   ) {
  //     const typeRefNode = node as TypeReferenceNode;
  //     const refName = typeRefNode.getText();
  //     const markdownLink = `[${refName}](#${refName})`;
  //     typeText = typeText.replace(refName, markdownLink);
  //   }

  //   node.forEachChild(traverse);
  // }

  // // Start the traversal
  // typeDeclaration.getTypeNode()?.forEachChild(traverse);
  // let typeText = typeDeclaration.getTypeNode()?.getText() || '';

  // // Traverse the AST of the type node
  // typeDeclaration.getTypeNode()?.forEachChild((node) => {
  //   // Check if the node is a TypeReferenceNode
  //   if (node.getKind() === SyntaxKind.TypeReference) {
  //     const typeRefNode = node as TypeReferenceNode;
  //     const refName = typeRefNode.getText();
  //     // Transform the type reference into a markdown link
  //     const markdownLink = `[${refName}](#${refName})`;
  //     // Replace the original type reference with the markdown link
  //     typeText = typeText.replace(refName, markdownLink);
  //   }
  // });
  // console.log(typeText);
  const typeDef: TypeAliasDef = {
    ...jsDocDef,
    ...nodeDef,
    name
  };

  return typeDef;
}
