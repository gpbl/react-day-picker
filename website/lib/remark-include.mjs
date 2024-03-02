import fs from "node:fs";
import path from "node:path";
import { remark } from "remark";
import { visitParents } from "unist-util-visit-parents";
export default function remarkIncludeContent() {
  return function transformer(tree) {
    // Process the tree
    visitParents(tree, "text", (node, ancestors) => {
      if (typeof node.value === "string" && node.value.startsWith("%include")) {
        const match = node.value.match(/^%include (.+)/);
        const filePath = path.resolve(match[1].trim());
        try {
          // Read the content of the included file.
          let content = fs.readFileSync(filePath, "utf8");
          content = content.replace(/^#.*\n?/, "");

          // Parse the content into an AST.
          const ast = remark().parse(content);

          // Get the parent and grandparent of the current node.
          const parentNode = ancestors[ancestors.length - 1];
          const grandParentNode = ancestors[ancestors.length - 2];

          // Find the index of the parent node in the grandparent's children array.
          const parentIndex = grandParentNode.children.indexOf(parentNode);

          // Replace the parent node with the AST of the included content.
          grandParentNode.children.splice(parentIndex, 1, ...ast.children);
        } catch (error) {
          console.error(`Unable to read file: ${filePath}. ${error.message}`);
        }
      }
    });
  };
}
