import { ModifiersClassNames, ModifiersStatus } from 'types/Modifiers';

export function getClassNames(
  modifiersStatus: ModifiersStatus,
  modifiersClassNames: ModifiersClassNames,
  modifierPrefix: string
) {
  const classNames: string[] = [];
  Object.keys(modifiersStatus).forEach((modifier) => {
    const customClassName = modifiersClassNames[modifier];
    if (customClassName) {
      classNames.push(customClassName);
    } else {
      classNames.push(`${modifierPrefix}${modifier}`);
    }
  });
  return classNames;
}
