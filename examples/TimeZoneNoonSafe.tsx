import React, { useState } from "react";

import {
  DayPicker,
  type DayPickerProps,
  type PropsSingle,
  TZDate,
} from "react-day-picker";

type TimeZoneNoonSafeProps = Partial<DayPickerProps> & {
  selected?: Date;
  onSelect?: PropsSingle["onSelect"];
};

export function TimeZoneNoonSafe(props: TimeZoneNoonSafeProps = {}) {
  const {
    timeZone: timeZoneProp,
    weekStartsOn: weekStartsOnProp,
    selected: selectedProp,
    onSelect: onSelectProp,
    defaultMonth,
    startMonth,
    footer,
    mode: _mode,
    ...rest
  } = props;

  const timeZone = timeZoneProp ?? "Asia/Dubai";
  const weekStartsOn = (weekStartsOnProp ??
    1) as DayPickerProps["weekStartsOn"];
  const [selected, setSelected] = useState<Date | undefined>(
    selectedProp ?? new TZDate(1900, 11, 1, timeZone),
  );
  const onSelect: PropsSingle["onSelect"] =
    onSelectProp ??
    ((nextSelected) => {
      setSelected(nextSelected ?? undefined);
    });
  const selectedValue = selectedProp ?? selected;

  return (
    <DayPicker
      mode="single"
      captionLayout="dropdown"
      defaultMonth={defaultMonth ?? new TZDate(1900, 11, 1, timeZone)}
      timeZone={timeZone}
      noonSafe
      weekStartsOn={weekStartsOn}
      selected={selectedValue}
      onSelect={onSelect}
      startMonth={startMonth ?? new Date(1880, 0, 1)}
      toYear={2025}
      footer={
        footer ??
        (selected
          ? selected.toString()
          : `Pick a day to see it in ${timeZone} time zone.`)
      }
      {...rest}
    />
  );
}
