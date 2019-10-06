import matchModifier from './matchModifier';
/**
 * Return the modifiers matching the given day for the given
 * object of modifiers.
 *
 * @export
 * @param {Date} day
 * @param {Object} [modifiersObj={}]
 * @return {Array}
 */
function getModifiersForDay(day, modifiersObj = {}) {
  return Object.keys(modifiersObj).reduce((modifiers, modifierName) => {
    const value = modifiersObj[modifierName];
    if (matchModifier(day, value)) {
      modifiers.push(modifierName);
    }
    return modifiers;
  }, []);
}

export default getModifiersForDay;
