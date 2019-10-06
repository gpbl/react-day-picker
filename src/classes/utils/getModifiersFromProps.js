function getModifiersFromProps(props) {
  const modifiers = { ...props.modifiers };
  if (props.selected) {
    modifiers.selected = props.selected;
  }
  if (props.disabled) {
    modifiers.disabled = props.disabled;
  }
  if (props.hidden) {
    modifiers.hidden = props.hidden;
  }
  return modifiers;
}

export default getModifiersFromProps;
