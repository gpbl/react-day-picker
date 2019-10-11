import { DayPickerProps } from 'types/props';

/**
 * Return the props for the Caption component.
 */
export function prepareCaption(props: DayPickerProps) {
  const { styles, classNames } = props;
  return {
    htmlProps: {
      className: classNames.caption,
      style: styles.caption,
    },
  };
}
