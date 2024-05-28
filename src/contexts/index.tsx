import type { FunctionComponent, PropsWithChildren } from "react";

import type { DayPickerProps, Mode } from "../types";

import { CalendarProvider } from "./calendar";
import { FocusProvider } from "./focus";
import { ModifiersProvider } from "./modifiers";
import { PropsProvider } from "./props";
import { SelectionProvider } from "./selection";

export * from "./calendar";
export * from "./focus";
export * from "./modifiers";
export * from "./props";
export * from "./selection";

/**
 * Provide the value for all the contexts used by DayPicker.
 *
 * @private
 */
export const ContextProviders: FunctionComponent<
  PropsWithChildren<DayPickerProps<Mode>>
> = <T extends Mode>(props: PropsWithChildren<DayPickerProps<T>>) => {
  const { children, ...dayPickerProps } = props;

  return (
    <PropsProvider {...dayPickerProps}>
      <CalendarProvider>
        <SelectionProvider>
          <ModifiersProvider>
            <FocusProvider>{children}</FocusProvider>
          </ModifiersProvider>
        </SelectionProvider>
      </CalendarProvider>
    </PropsProvider>
  );
};
