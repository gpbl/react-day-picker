import { InterfaceDeclaration } from 'ts-morph';
import { getDefaultValue } from './utils/getDefaultValue.ts';
import { PropDef } from './types.ts';
import { createNodeDef } from './createNodeDef.ts';
import { createJsDocDef } from './createJsDocDef.ts';

export async function createPropsDefs(
  interfaceDeclaration: InterfaceDeclaration
) {
  const properties = interfaceDeclaration.getProperties();
  const propDefs: PropDef[] = [];

  for (const property of properties) {
    const name = property.getName();
    const type = property.getType().getText();
    const isSimpleType = !type.includes('import');

    const required = !property.hasQuestionToken();

    const node = createNodeDef(property);

    const jsdoc = await createJsDocDef(property);
    const defaultValue = getDefaultValue(property);

    propDefs.push({
      ...node,
      ...jsdoc,
      name,
      type: !isSimpleType ? type.replace(/import\(.*\)\./, '') : '',
      typeSimple: isSimpleType ? type : '',
      required,
      defaultValue
    });
  }
  return propDefs;
}
