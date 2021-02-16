import { PropsValues } from '../../../components';
import { ModifiersMatchers } from '../../../types';

const modifierProps = ['selected', 'disabled', 'hidden'];

/**
 * Return a modifiers object by merging the modifier props (selected, disabled,
 * hidden) with the custom modifiers.
 */
export function getModifiersFromProps(props: PropsValues): ModifiersMatchers {
  const modifiers = Object.assign({}, props.modifiers);
  modifierProps.forEach((propName) => {
    if (props[propName]) modifiers[propName] = props[propName];
  });
  return modifiers;
}
