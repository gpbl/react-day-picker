import { DayPicker } from "@daypicker/react";
import { format, isSameMonth } from "date-fns";
import React from "react";

const march = new Date(2026, 2, 15);
const november = new Date(2026, 10, 15);

/** Demonstrates focus preservation across controlled month changes. */
export function ControlledMonthFocus() {
  const [month, setMonth] = React.useState(march);
  const [selected, setSelected] = React.useState<Date | undefined>(march);
  const [focusedDay, setFocusedDay] = React.useState<Date>();

  const [disabled, setDisabled] = React.useState(false);
  const [disableNavigation, setDisableNavigation] = React.useState(false);

  const jumpToOtherMonth = (disableDays = false, disableNav = false) => {
    const nextDay = isSameMonth(month, march) ? november : march;
    setMonth(nextDay);
    setSelected(nextDay);
    setDisabled(disableDays);
    setDisableNavigation(disableNav);
  };

  return (
    <fieldset
      onKeyDown={(event) => {
        const key = event.key.toLowerCase();
        if (key === "j" || key === "d" || key === "n") {
          jumpToOtherMonth(key !== "j", key === "n");
        }
      }}
    >
      <legend>Controlled month focus</legend>
      <p>
        Focus a day and press J to change the controlled month while preserving
        focus. Use the button to change the month while focus is outside the day
        grid. Press D to jump with all days disabled, or N to disable both days
        and navigation. Focus should move to a navigation button in those cases.
      </p>
      <DayPicker
        mode="single"
        month={month}
        disabled={disabled}
        disableNavigation={disableNavigation}
        onDayBlur={() => setFocusedDay(undefined)}
        onDayFocus={setFocusedDay}
        onMonthChange={setMonth}
        onSelect={setSelected}
        selected={selected}
        footer={
          focusedDay
            ? `Focused day: ${format(focusedDay, "PPPP")}`
            : "No day has focus"
        }
      />
      <button type="button" onClick={() => jumpToOtherMonth()}>
        Jump to {isSameMonth(month, march) ? "November" : "March"}
      </button>
    </fieldset>
  );
}
