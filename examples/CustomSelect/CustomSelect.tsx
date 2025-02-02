import React, { useState, createContext, use, useCallback } from "react";

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

const ContainerContext = createContext<HTMLDivElement | null>(null);

export function CustomDropdown(props: DropdownProps) {
  const { options, value, onChange } = props;
  const container = use(ContainerContext);

  const handleValueChange = (newValue: string) => {
    if (onChange) {
      const syntheticEvent = {
        target: {
          value: newValue
        }
      } as React.ChangeEvent<HTMLSelectElement>;

      onChange(syntheticEvent);
    }
  };

  return (
    <Select value={value?.toString()} onValueChange={handleValueChange}>
      <SelectTrigger>
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

export function CustomSelect() {
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
      </ContainerContext.Provider>
    </div>
  );
}
