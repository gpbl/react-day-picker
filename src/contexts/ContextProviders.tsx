import { PropsWithChildren } from "react";

import {
  PropsSingle,
  PropsDefault,
  PropsMulti,
  PropsRange
} from "../types/props";

import { DayPickerProvider } from "./DayPicker";
import { FocusProvider } from "./Focus";
import { ModifiersProvider } from "./Modifiers/ModifiersContext";
import { NavigationProvider } from "./Navigation";
import { SelectMultipleProvider } from "./SelectMultiple";
import { SelectRangeProvider } from "./SelectRange";
import { SelectSingleProvider } from "./SelectSingle";

export type ContextProvidersProps =
  | Partial<PropsDefault>
  | Partial<PropsSingle>
  | Partial<PropsMulti>
  | Partial<PropsRange>;

/** Provide the value for all the contexts. */
export function ContextProviders(
  props: PropsWithChildren<ContextProvidersProps>
) {
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
