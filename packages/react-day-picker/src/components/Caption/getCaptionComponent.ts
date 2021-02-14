import { DayPickerProps } from '../../types';

/**
 * Return the values for creating a [[Caption]] components.
 */
export function getCaptionComponent(
  props: DayPickerProps
): {
  /** The props for the root element. */
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
