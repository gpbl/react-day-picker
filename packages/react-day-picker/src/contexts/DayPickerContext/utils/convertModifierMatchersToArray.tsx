import { Modifiers, ModifiersArray } from 'types';

export function convertModifierMatchersToArray(
  modifiers: Modifiers
): ModifiersArray {
  const modifiersAsArray: ModifiersArray = {};
  for (const [modifierName, modifier] of Object.entries(modifiers)) {
    if (Array.isArray(modifier)) {
      modifiersAsArray[modifierName] = modifier;
    } else {
      modifiersAsArray[modifierName] = [modifier];
    }
  }
  return modifiersAsArray;
}
