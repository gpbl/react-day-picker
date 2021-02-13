import { DayPickerProps } from 'types';

export function getCaptionComponent(
  props: DayPickerProps
): {
  rootProps: Partial<JSX.IntrinsicElements['caption']>;
} {
  return {
    rootProps: {
      'aria-atomic': true,
      'aria-live': 'polite',
      className: props.classNames?.Caption,
      style: props.styles?.Caption
    }
  };
}
