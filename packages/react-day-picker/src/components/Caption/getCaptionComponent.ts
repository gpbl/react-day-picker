import { DayPickerProps } from 'types';

export function getCaptionComponent(
  dayPickerProps: DayPickerProps
): {
  containerProps: Pick<JSX.IntrinsicElements['caption'], 'className' | 'style'>;
} {
  return {
    containerProps: {
      className: dayPickerProps.classNames?.caption,
      style: dayPickerProps.styles?.caption
    }
  };
}
