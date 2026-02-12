import React, { createContext, use, useCallback, useState } from "react";

import { DayPicker, type DropdownProps } from "react-day-picker-v9";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectStyles,
  SelectTrigger,
  SelectValue,
} from "./Select";

const ContainerContext = createContext<HTMLDivElement | null>(null);

export function CustomSelectDropdown(props: DropdownProps) {
  const { options, value, onChange, "aria-label": ariaLabel } = props;
  const container = use(ContainerContext);

  const handleValueChange = (newValue: string) => {
    if (onChange) {
      const syntheticEvent = {
        target: {
          value: newValue,
        },
      } as React.ChangeEvent<HTMLSelectElement>;

      onChange(syntheticEvent);
    }
  };

  return (
    <Select value={value?.toString()} onValueChange={handleValueChange}>
      <SelectTrigger aria-label={ariaLabel}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent container={container}>
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

export function CustomDropdown() {
  const [selected, setSelected] = useState<Date | undefined>();

  // Use explicit container to make the example work in the docs with shadow DOM
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const handleRef = useCallback((element: HTMLDivElement | null) => {
    setContainer(element);
  }, []);

  return (
    <div ref={handleRef}>
      <SelectStyles />
      <ContainerContext.Provider value={container}>
        <DayPicker
          captionLayout="dropdown"
          components={{ Dropdown: CustomSelectDropdown }}
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={
            selected
              ? `Selected: ${selected.toLocaleDateString()}`
              : "Pick a day."
          }
        />
      </ContainerContext.Provider>
    </div>
  );
}
