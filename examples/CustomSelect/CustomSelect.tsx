import React from "react";
import { useState } from "react";

import { DayPicker, DropdownProps } from "react-day-picker";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectStyles
} from "./Select";

export function CustomDropdown(props: DropdownProps) {
  const { options, value, onChange, "aria-label": ariaLabel } = props;

  const handleValueChange = (newValue: string) => {
    if (onChange) {
      // Create a synthetic event to match the expected onChange handler
      const syntheticEvent = {
        target: {
          value: newValue,
          name: props.name
        }
      } as React.ChangeEvent<HTMLSelectElement>;

      onChange(syntheticEvent);
    }
  };

  return (
    <Select value={value?.toString()} onValueChange={handleValueChange}>
      <SelectTrigger aria-label={ariaLabel}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value.toString()}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function CustomSelect() {
  const [selected, setSelected] = useState<Date | undefined>();

  return (
    <>
      <SelectStyles />
      <DayPicker
        captionLayout="dropdown"
        components={{ Dropdown: CustomDropdown }}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={
          selected
            ? `Selected: ${selected.toLocaleDateString()}`
            : "Pick a day."
        }
      />
    </>
  );
}
