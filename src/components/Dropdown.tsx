import React, { type SelectHTMLAttributes } from "react";
import type { ClassNames, CustomComponents } from "../types/index.js";
import { UI } from "../UI.js";

/** An option to use in the dropdown. Maps to the `<option>` HTML element. */
export type DropdownOption = {
  /** The value of the option. */
  value: number;
  /** The label of the option. */
  label: string;
  /** Whether the dropdown option is disabled (e.g., out of the calendar range). */
  disabled: boolean;
};

/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Dropdown(
  props: {
    /**
     * @deprecated Use {@link useDayPicker} hook to get the list of internal
     *   components.
     */
    components: CustomComponents;
    /**
     * @deprecated Use {@link useDayPicker} hook to get the list of internal
     *   class names.
     */
    classNames: ClassNames;
    /** The options to display in the dropdown. */
    options?: DropdownOption[] | undefined;
  } & Omit<SelectHTMLAttributes<HTMLSelectElement>, "children">,
) {
  const { options, className, components, classNames, ...selectProps } = props;

  const cssClassSelect = [classNames[UI.Dropdown], className].join(" ");

  const selectedOption = options?.find(
    ({ value }) => value === selectProps.value,
  );
  return (
    <span
      data-disabled={selectProps.disabled}
      className={classNames[UI.DropdownRoot]}
    >
      <components.Select className={cssClassSelect} {...selectProps}>
        {options?.map(({ value, label, disabled }) => (
          <components.Option key={value} value={value} disabled={disabled}>
            {label}
          </components.Option>
        ))}
      </components.Select>
      <span className={classNames[UI.CaptionLabel]} aria-hidden>
        {selectedOption?.label}
        <components.Chevron
          orientation="down"
          size={18}
          className={classNames[UI.Chevron]}
        />
      </span>
    </span>
  );
}

export type DropdownProps = Parameters<typeof Dropdown>[0];
