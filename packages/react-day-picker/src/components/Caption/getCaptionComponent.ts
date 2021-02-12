import { DayPickerProps } from 'types';

export function getCaptionComponent(
  dayPickerProps: Pick<DayPickerProps, 'classNames' | 'styles'>
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
