import { useDayPicker } from '../../contexts/DayPickerContext';

import { Select as DefaultSelect, type SelectProps } from '../Select';
import { Chevron as DefaultChevron } from '../Chevron';
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

  const cssClassRoot = [classNames.dropdown_root, rootClassName].join(' ');
  const cssClassSelect = [classNames.dropdown, className].join(' ');

  const Select = components?.Select ?? DefaultSelect;
  const Option = components?.Option ?? DefaultOption;
  const Chevron = components?.Chevron ?? DefaultChevron;

  return (
    <span className={cssClassRoot}>
      <Select className={cssClassSelect} {...selectProps}>
        {options?.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      <span className={classNames.caption_label} aria-hidden>
        {props.value}
        <Chevron orientation="down" size={18} />
      </span>
    </span>
  );
}
