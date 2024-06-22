import React, { type SelectHTMLAttributes } from "react";

import { UI } from "../UI";
import { useProps } from "../contexts";

import { Chevron as DefaultChevron } from "./Chevron";
import { Option as DefaultOption } from "./Option";
import { Select as DefaultSelect } from "./Select";

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
    options?: DropdownOption[] | undefined;
    rootClassName?: string;
  } & Omit<SelectHTMLAttributes<HTMLSelectElement>, "children">
) {
  const { options, rootClassName, className, ...selectProps } = props;
  const { classNames, components } = useProps();

  const cssClassRoot = [classNames[UI.DropdownRoot], rootClassName].join(" ");
  const cssClassSelect = [classNames[UI.Dropdown], className].join(" ");

  const Select = components?.Select ?? DefaultSelect;
  const Option = components?.Option ?? DefaultOption;
  const Chevron = components?.Chevron ?? DefaultChevron;

  const selectedOption = options?.find(
    ({ value }) => value === selectProps.value
  );
  return (
    <span className={cssClassRoot}>
      <Select className={cssClassSelect} {...selectProps}>
        {options?.map(({ value, label, disabled }) => (
          <Option key={value} value={value} disabled={disabled}>
            {label}
          </Option>
        ))}
      </Select>
      <span className={classNames[UI.CaptionLabel]} aria-hidden>
        {selectedOption?.label}
        <Chevron orientation="down" size={18} />
      </span>
    </span>
  );
}

export type DropdownProps = Parameters<typeof Dropdown>[0];
