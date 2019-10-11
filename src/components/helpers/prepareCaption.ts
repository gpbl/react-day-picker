import { DayPicker } from 'types/DayPicker';

/**
 * Return the props for the Caption component.
 */
export function prepareCaption(props: DayPicker) {
  const { styles, classNames } = props;
  return {
    htmlProps: {
      className: classNames.caption,
      style: styles.caption,
    },
  };
}
