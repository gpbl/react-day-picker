import { DayPickerProps } from 'types';

export function getCaptionComponent(
  dayPickerProps: Pick<DayPickerProps, 'classNames' | 'styles'>
): {
  rootProps: Pick<JSX.IntrinsicElements['caption'], 'className' | 'style'>;
} {
  return {
    rootProps: {
      className: dayPickerProps.classNames?.caption,
      style: dayPickerProps.styles?.caption
    }
  };
}
