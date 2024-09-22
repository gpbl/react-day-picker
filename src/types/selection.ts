import type { DayPickerProps } from "./props.js";
import type { DateRange, Mode, Modifiers } from "./shared.js";

export type Selection<T extends DayPickerProps> = {
  /** The selected date(s). */
  selected: SelectedValue<T> | undefined;
  /** Set a selection. */
  select: SelectHandler<T> | undefined;
  /** Whether the given date is selected. */
  isSelected: (date: Date) => boolean;
};

export type SelectedSingle<T extends { required?: boolean }> =
  T["required"] extends true ? Date : Date | undefined;
export type SelectedMulti<T extends { required?: boolean }> =
  T["required"] extends true ? Date[] : Date[] | undefined;
export type SelectedRange<T extends { required?: boolean }> =
  T["required"] extends true ? DateRange : DateRange | undefined;

export type SelectedValue<T> = T extends { mode: "single"; required?: boolean }
  ? SelectedSingle<T>
  : T extends { mode: "multiple"; required?: boolean }
    ? SelectedMulti<T>
    : T extends { mode: "range"; required?: boolean }
      ? SelectedRange<T>
      : undefined;

export type SelectHandlerSingle<T extends { required?: boolean | undefined }> =
  (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => T["required"] extends true ? Date : Date | undefined;

export type SelectHandlerMulti<T extends { required?: boolean | undefined }> = (
  triggerDate: Date,
  modifiers: Modifiers,
  e: React.MouseEvent | React.KeyboardEvent
) => T["required"] extends true ? Date[] : Date[] | undefined;

export type SelectHandlerRange<T extends { required?: boolean | undefined }> = (
  triggerDate: Date,
  modifiers: Modifiers,
  e: React.MouseEvent | React.KeyboardEvent
) => T["required"] extends true ? DateRange : DateRange | undefined;

export type SelectHandler<
  T extends { mode?: Mode | undefined; required?: boolean | undefined }
> = T extends {
  mode: "single";
}
  ? SelectHandlerSingle<T>
  : T extends { mode: "multiple" }
    ? SelectHandlerMulti<T>
    : T extends { mode: "range" }
      ? SelectHandlerRange<T>
      : undefined;
