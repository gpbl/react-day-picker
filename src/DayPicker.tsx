import { DayPickerDefaultProps } from './types/DayPickerDefault';
import { DayPickerMultipleProps } from './types/DayPickerMultiple';
import { DayPickerRangeProps } from './types/DayPickerRange';
import { DayPickerSingleProps } from './types/DayPickerSingle';

import { Root } from './components/Root';
import { RootProvider } from './contexts/RootProvider';

/** Defines the props accepted by the DayPicker component. */
export type DayPickerProps =
  | DayPickerDefaultProps
  | DayPickerSingleProps
  | DayPickerMultipleProps
  | DayPickerRangeProps;

/**
 * Render the date picker component.
 *
 * @see https://daypicker.dev
 */
export function DayPicker(
  props:
    | DayPickerDefaultProps
    | DayPickerSingleProps
    | DayPickerMultipleProps
    | DayPickerRangeProps
): JSX.Element {
  return (
    <RootProvider {...props}>
      <Root initialProps={props} />
    </RootProvider>
  );
}
