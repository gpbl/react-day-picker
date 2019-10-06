/**
 * Return the props for the Day component.
 *
 * TODO: document returned props.
 *
 * @param {Date|DateWithModifiers} day
 * @param {Object} props
 *
 * @return {Object}
 */
export default function prepareDay(day, props) {
  const { onDayClick, styles, classNames } = props;
  const modifiers = day.modifiers || {};

  const Container = modifiers.interactive ? 'button' : 'span';

  let onClick;
  if (modifiers.interactive) {
    onClick = e => {
      e.stopPropagation();
      e.preventDefault();
      onDayClick(day.date, modifiers, e);
    };
  }

  let style = { ...styles.day };
  if (styles && styles.modifiers) {
    Object.keys(modifiers).forEach(modifier => {
      style = {
        ...style,
        ...styles.modifiers[modifier],
      };
    });
  }

  let className = [classNames.day] || [];

  if (classNames && classNames.modifiers) {
    Object.keys(modifiers)
      .filter(modifier => Boolean(modifiers[modifier]))
      .forEach(modifier => {
        className.push(classNames.modifiers[modifier]);
      });
    className = className.join(' ').trim();
  }

  const dataProps = {};
  Object.entries(modifiers)
    // eslint-disable-next-line no-unused-vars
    .filter(([modifier, value]) => value !== false)
    .forEach(
      ([modifier, value]) => (dataProps[`data-rdp-${modifier}`] = value)
    );

  const componentProps = {
    'aria-disabled': !modifiers.interactive || undefined,
    disabled: modifiers.disabled || undefined,
    onClick,
    style,
    className,
    ...dataProps,
  };
  const wrapperProps = {
    className: classNames.dayWrapper,
    styles: styles.dayWrapper,
  };

  return { Container, props: componentProps, wrapperProps };
}
