import React from "react";

import { startOfMonth } from "date-fns";
import { DayPickerProps } from "react-day-picker";

import styles from "./styles.module.css";

interface CustomizationFieldsetProps {
  props: DayPickerProps;
  setProps: React.Dispatch<React.SetStateAction<DayPickerProps>>;
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
}

export function CustomizationFieldset({
  props,
  setProps,
  accentColor,
  setAccentColor
}: CustomizationFieldsetProps) {
  return (
    <fieldset>
      <legend>
        Customization{" "}
        <button
          type="button"
          onClick={() => {
            setProps({
              ...props,
              captionLayout: undefined,
              navLayout: undefined,
              showOutsideDays: false,
              showWeekNumber: false,
              fixedWeeks: false,
              hideWeekdays: false
            });
            setAccentColor("");
          }}
        >
          Reset
        </button>
      </legend>
      <div className={styles.fields}>
        <label>
          Caption Layout:
          <select
            name="captionLayout"
            value={props.captionLayout ?? ""}
            onChange={(e) => {
              const newCaptionLayout = e.target.value as
                | "label"
                | "dropdown"
                | "dropdown-months"
                | "dropdown-years";
              const newProps = {
                ...props,
                captionLayout: newCaptionLayout
              } as DayPickerProps;
              if (newCaptionLayout === "dropdown") {
                const today = new Date();
                const hundredYearsAgo = new Date();
                hundredYearsAgo.setFullYear(today.getFullYear() - 100);
                newProps.startMonth = startOfMonth(hundredYearsAgo);
                newProps.endMonth = startOfMonth(today);
              } else if (newCaptionLayout === "label") {
                newProps.startMonth = undefined;
                newProps.endMonth = undefined;
              }
              setProps(newProps);
            }}
          >
            <option></option>
            <option value="label">Label</option>
            <option value="dropdown">Dropdown</option>
            <option value="dropdown-months">Dropdown months</option>
            <option value="dropdown-years">Dropdown years</option>
          </select>
        </label>
        {/* <label>
          Navigation Layout:
          <select
            name="navLayout"
            value={props.navLayout ?? ""}
            onChange={(e) => {
              const newProps = {
                ...props,
                navLayout: e.target.value ?? undefined
              } as DayPickerProps;
              setProps(newProps);
            }}
          >
            <option value=""></option>
            <option value="around">Around</option>
            <option value="after">After</option>
          </select>
        </label> */}
        <label>
          <input
            type="checkbox"
            name="showOutsideDays"
            checked={props.showOutsideDays}
            onChange={(e) =>
              setProps({ ...props, showOutsideDays: e.target.checked })
            }
          />
          Show outside days
        </label>
        <label>
          <input
            type="checkbox"
            name="showWeekNumber"
            checked={props.showWeekNumber}
            onChange={(e) =>
              setProps({ ...props, showWeekNumber: e.target.checked })
            }
          />
          Show week number
        </label>
        <label>
          <input
            type="checkbox"
            name="fixedWeeks"
            checked={props.fixedWeeks}
            onChange={(e) =>
              setProps({ ...props, fixedWeeks: e.target.checked })
            }
          />
          Fixed weeks
        </label>
        <label>
          <input
            type="checkbox"
            name="hideWeekdays"
            checked={props.hideWeekdays}
            onChange={(e) =>
              setProps({ ...props, hideWeekdays: e.target.checked })
            }
          />
          Hide weekdays
        </label>
        <label>
          Accent Color:
          <input
            value={accentColor ?? ""}
            type="color"
            name="accentColor"
            onChange={(e) => setAccentColor(e.target.value)}
          />
        </label>
      </div>
    </fieldset>
  );
}
