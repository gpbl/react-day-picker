import { DayPickerProps } from 'types';

export function getCaptionComponent(
  props: DayPickerProps
): {
  rootProps: Partial<JSX.IntrinsicElements['caption']>;
} {
  return {
    rootProps: {
      className: props.classNames?.caption,
      style: props.styles?.caption
    }
  };
}
