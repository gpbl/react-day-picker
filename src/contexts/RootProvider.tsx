import { ReactNode } from "react";

import { ModifiersProvider } from "../contexts/Modifiers/ModifiersContext";
import { DayPickerDefaultProps } from "../types/DayPickerDefault";
import { DayPickerMultipleProps } from "../types/DayPickerMultiple";
import { DayPickerRangeProps } from "../types/DayPickerRange";
import { DayPickerSingleProps } from "../types/DayPickerSingle";

import { DayPickerProvider } from "./DayPicker";
import { FocusProvider } from "./Focus";
import { NavigationProvider } from "./Navigation";
import { SelectMultipleProvider } from "./SelectMultiple";
import { SelectRangeProvider } from "./SelectRange";
import { SelectSingleProvider } from "./SelectSingle";

type RootContextProps =
  | Partial<DayPickerDefaultProps>
  | Partial<DayPickerSingleProps>
  | Partial<DayPickerMultipleProps>
  | Partial<DayPickerRangeProps>;

/** The props of {@link RootProvider}. */
export type RootContext = RootContextProps & {
  children?: ReactNode;
};

/** Provide the value for all the context providers. */
export function RootProvider(props: RootContext): JSX.Element {
  const { children, ...initialProps } = props;

  return (
    <DayPickerProvider initialProps={initialProps}>
      <NavigationProvider>
        <SelectSingleProvider initialProps={initialProps}>
          <SelectMultipleProvider initialProps={initialProps}>
            <SelectRangeProvider initialProps={initialProps}>
              <ModifiersProvider>
                <FocusProvider>{children}</FocusProvider>
              </ModifiersProvider>
            </SelectRangeProvider>
          </SelectMultipleProvider>
        </SelectSingleProvider>
      </NavigationProvider>
    </DayPickerProvider>
  );
}
