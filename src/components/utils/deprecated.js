export default function deprecated(validator, message) {
  return function deprecated(props, propName, ...rest) {
    if (props[propName] != null) {
      console.warn(`react-day-picker: "${propName}" is deprecated.`, message);
    }
    return validator(props, propName, ...rest);
  };
}
