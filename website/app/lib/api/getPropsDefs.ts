import { InterfaceDeclaration } from 'ts-morph';
import { getExportedMemberByName } from './utils/getExportedMemberByName';
import { getDescription } from './utils/getDescription';
import { getSeeTags } from './utils/getSeeTags';
import { getDeprecated } from './utils/getDeprecated';
import { getDefaultValue } from './utils/getDefaultValue';

export type PropsDef = {
  name: string;
  required: boolean;
  type: string;
  typeSimple: string;
  defaultValue: string | boolean | undefined;
  deprecated: string | false;
  description: string | undefined;
  see: (string | undefined)[] | undefined;
};

/** Get the props definitions for an interface */
export function getPropsDefs(exportedInterface: `${string}Props`) {
  const member = getExportedMemberByName(exportedInterface)?.[0];

  if (!(member instanceof InterfaceDeclaration)) {
    throw new Error('Not an instance of InterfaceDeclaration');
  }
  const interfaceDeclaration = member as InterfaceDeclaration;
  const properties = interfaceDeclaration.getProperties();
  const propsDefs: PropsDef[] = [];

  for (const property of properties) {
    const name = property.getName();
    const type = property.getType().getText();
    const isSimpleType = !type.includes('import');
    const required = !property.hasQuestionToken();

    const description = getDescription(property);
    const seeTags = getSeeTags(property);
    const deprecatedText = getDeprecated(property);
    const defaultValueText = getDefaultValue(property);

    propsDefs.push({
      name,
      type: !isSimpleType ? type.replace(/import\(.*\)\./, '') : '',
      typeSimple: isSimpleType ? type : '',
      required,
      defaultValue: defaultValueText ?? '',
      deprecated: deprecatedText ?? false,
      description,
      see: seeTags.map((tag) => {
        // is there a bug in ts-morph to get the full URLs?
        return tag.getCommentText()?.replace('://', 'https://');
      })
    });
  }
  return propsDefs.sort((a, b) => a.name.localeCompare(b.name));
}

console.log(getPropsDefs('ButtonProps'));
