function formatType(type) {
  const { value, name } = type;
  switch (name) {
    case 'union':
      return value.map(t => formatType(t)).join(' | ');
    case 'instanceOf':
      return `${value}`;
    default:
      return `${name}`;
  }
}

export default formatType;
