import React, { type SelectHTMLAttributes } from "react";

import { ChevronFlag, UI } from "../UI.js";
import type { ClassNames, CustomComponents } from "../types/index.js";

/** An option to use in the dropdown. Maps to the `<option>` HTML element. */
export type DropdownOption = {
  /** The value of the option. */
  value: number;
  /** The label of the option. */
  label: string;
  /**
   * The dropdown option is disabled when it cannot be selected because out of
   * the calendar range.
   */
  disabled: boolean;
};

/**
 * Render a dropdown component to use in the navigation bar.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Dropdown(
  props: {
    components: Pick<
      Required<CustomComponents>,
      "Select" | "Option" | "Chevron"
    >;
    classNames: Pick<
      ClassNames,
      | UI.DropdownRoot
      | UI.Dropdown
      | UI.CaptionLabel
      | UI.Chevron
      | ChevronFlag.disabled
    >;
    options?: DropdownOption[] | undefined;
  } & Omit<SelectHTMLAttributes<HTMLSelectElement>, "children">
) {
  const { options, className, components, classNames, ...selectProps } = props;

  const cssClassRoot = [classNames[UI.DropdownRoot]].join(" ");
  const cssClassSelect = [classNames[UI.Dropdown], className].join(" ");

  const selectedOption = options?.find(
    ({ value }) => value === selectProps.value
  );
  return (
    <span className={cssClassRoot}>
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
          classNames={classNames}
        />
      </span>
    </span>
  );
}

export type DropdownProps = Parameters<typeof Dropdown>[0];
