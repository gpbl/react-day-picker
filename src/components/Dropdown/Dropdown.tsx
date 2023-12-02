import { useDayPicker } from '../../contexts/DayPickerContext';

import { Select as DefaultSelect, type SelectProps } from '../Select';
import { Chevron as DefaultChevron } from '../Chevron';
import { Option as DefaultOption } from '../Option';

export type DropdownOption = [value: number, label: string];

export interface DropdownProps extends Omit<SelectProps, 'children'> {
  options?: DropdownOption[] | undefined;
  rootClassName?: string;
}

/**
 * A dropdown that works like a regular `HTMLSelect`, but with better style.
 */
export function Dropdown(props: DropdownProps) {
  const { options, rootClassName, className, ...selectProps } = props;
  const { classNames, components } = useDayPicker();

  const cssClassRoot = [classNames.dropdown_root, rootClassName].join(' ');
  const cssClassSelect = [classNames.dropdown, className].join(' ');

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
