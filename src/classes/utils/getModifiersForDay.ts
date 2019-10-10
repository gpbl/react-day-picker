import matchModifier from './matchModifier';
/**
 * Return the modifiers matching the given day for the given
 * object of modifiers.
 *
 * @export
 * @param {Date} day
 * @param {Object} [modifiersObj]
 * @return {Array}
 */
export function getModifiersForDay(day: Date, modifiersObj: any): Array<any> {
  return Object.keys(modifiersObj).reduce(
    (modifiers: Array<string>, modifierName: string) => {
      const value = modifiersObj[modifierName];
      if (matchModifier(day, value)) {
        modifiers.push(modifierName);
      }
      return modifiers;
    },
    []
  );
}
