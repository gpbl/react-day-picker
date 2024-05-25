import { SelectHTMLAttributes } from "react";

import { useProps } from "../contexts/props";

import { Chevron as DefaultChevron } from "./Chevron";
import { Option as DefaultOption } from "./Option";
import { Select as DefaultSelect } from "./Select";

/** An option to use in the dropdown. Maps to the `<option>` HTML element. */
export type DropdownOption = [
  /** The value of the option. */
  value: number,
  /** The label of the option. */
  label: string
];

/**
 * Render a dropdown component to use in the navigation bar.
 *
 * @group Components
 */
export function Dropdown(
  props: {
    options?: DropdownOption[] | undefined;
    rootClassName?: string;
  } & Omit<SelectHTMLAttributes<HTMLSelectElement>, "children">
) {
  const { options, rootClassName, className, ...selectProps } = props;
  const { classNames, components } = useProps();

  const cssClassRoot = [classNames.dropdown_root, rootClassName].join(" ");
  const cssClassSelect = [classNames.dropdown, className].join(" ");

  const Select = components?.Select ?? DefaultSelect;
  const Option = components?.Option ?? DefaultOption;
  const Chevron = components?.Chevron ?? DefaultChevron;

  const selectedOption = options?.find(
    ([value]) => value === selectProps.value
  );
  return (
    <span className={cssClassRoot}>
      <Select className={cssClassSelect} {...selectProps}>
        {options?.map(([value, label]) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </Select>
      <span className={classNames.caption_label} aria-hidden>
        {selectedOption?.[1]}
        <Chevron orientation="down" size={18} />
      </span>
    </span>
  );
}
