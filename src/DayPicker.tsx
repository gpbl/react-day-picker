import { PropsDefault } from './types/PropsDefault';
import { PropsMulti } from './types/PropsMulti';
import { PropsRange } from './types/PropsRange';
import { PropsSingle } from './types/PropsSingle';

import { Root } from './components/Root';
import { RootProvider } from './contexts/RootProvider';

/** Defines the props accepted by the DayPicker component. */
export type DayPickerProps =
  | PropsDefault
  | PropsSingle
  | PropsMulti
  | PropsRange;

/**
 * Render the date picker component.
 *
 * @see https://daypicker.dev
 */
export function DayPicker(
  props: PropsDefault | PropsSingle | PropsMulti | PropsRange
): JSX.Element {
  return (
    <RootProvider {...props}>
      <Root initialProps={props} />
    </RootProvider>
  );
}
