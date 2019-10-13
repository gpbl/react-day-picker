import { DayPickerProps, CaptionHtmlProps } from '../types';

export function getCaptionProps(props: DayPickerProps): CaptionHtmlProps {
  const { styles, classNames } = props;
  return {
    containerProps: {
      className: classNames.caption,
      style: styles.caption,
    },
  };
}
