import { useDayPicker } from '../../contexts/DayPickerContext';

import { Select as DefaultSelect, type SelectProps } from '../Select';
import { Option as DefaultOption } from '../Option';

export interface DropdownProps extends SelectProps {
  options?: Array<{ value: string; label: string }> | undefined;
  rootClassName?: string;
}

/**
 * A dropdown that works like a regular `HTMLSelect`, but with better style.
 */
export function Dropdown(props: DropdownProps) {
  const { options, rootClassName, className, ...selectProps } = props;
  const { classNames, components } = useDayPicker();

  const cssClassRoot = [classNames.dropdown, rootClassName].join(' ');
  const cssClassSelect = [classNames.select, className].join(' ');

  const Select = components?.Select ?? DefaultSelect;
  const Option = components?.Option ?? DefaultOption;

  return (
    <span className={cssClassRoot}>
      <Select className={cssClassSelect} {...selectProps}>
        {options?.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      <span aria-hidden>{props.value}</span>
    </span>
  );
}
