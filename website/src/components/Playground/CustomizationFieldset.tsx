import React from "react";
import type { Locale } from "react-day-picker";
import { DateLib } from "react-day-picker";
import {
  amET,
  getDateLib as getDateLibEthiopic,
} from "react-day-picker/ethiopic";
import * as locales from "react-day-picker/locale";
import {
  faIR,
  getDateLib as getDateLibPersian,
} from "react-day-picker/persian";

import styles from "./styles.module.css";
import type { DayPickerPropsWithCalendar } from "./useQueryStringSync";

interface CustomizationFieldsetProps {
  props: DayPickerPropsWithCalendar;
  setProps: React.Dispatch<React.SetStateAction<DayPickerPropsWithCalendar>>;
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
}

function resolveDateLib(props: DayPickerPropsWithCalendar) {
  if (props.calendar === "persian") {
    return getDateLibPersian({
      locale: (props.locale as Locale) ?? faIR,
      timeZone: props.timeZone,
      numerals: props.numerals,
    });
  }
  if (props.calendar === "ethiopic") {
    return getDateLibEthiopic({
      locale: (props.locale as Locale) ?? (amET as Locale),
      timeZone: props.timeZone,
      numerals: props.numerals,
    });
  }
  return new DateLib({
    locale: (props.locale as Locale) ?? locales.enUS,
    timeZone: props.timeZone,
  });
}

function resolveReferenceDate(
  props: DayPickerPropsWithCalendar,
  dateLib: DateLib,
) {
  const candidates = [props.month, props.startMonth, props.defaultMonth];
  for (const candidate of candidates) {
    if (candidate instanceof Date) return candidate;
  }
  return dateLib.today();
}

export function CustomizationFieldset({
  props,
  setProps,
  accentColor,
  setAccentColor,
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
              hideWeekdays: false,
              reverseYears: false,
              startMonth: undefined,
              endMonth: undefined,
            });
            setAccentColor("");
          }}
        >
          Reset
        </button>
      </legend>
      <div className={styles.fields}>
        <label>
          Navigation Layout:
          <select
            name="navLayout"
            value={props.navLayout ?? ""}
            onChange={(e) => {
              const newProps: DayPickerPropsWithCalendar = {
                ...props,
                navLayout: (e.target.value ?? undefined) as "around" | "after" | undefined,
              };
              setProps(newProps);
            }}
          >
            <option value=""></option>
            <option value="around">Around</option>
            <option value="after">After</option>
          </select>
        </label>
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
              const newProps: DayPickerPropsWithCalendar = {
                ...props,
                captionLayout: newCaptionLayout,
              };
              if (newCaptionLayout === "dropdown") {
                const dateLib = resolveDateLib(newProps);
                const referenceDate = resolveReferenceDate(newProps, dateLib);
                const hundredYearsAgo = dateLib.addYears(referenceDate, -100);
                newProps.startMonth = dateLib.startOfMonth(hundredYearsAgo);
                newProps.endMonth = dateLib.startOfMonth(referenceDate);
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
            <option value="dropdown-months">Dropdown Months</option>
            <option value="dropdown-years">Dropdown Years</option>
          </select>
        </label>
        {(props.captionLayout === "dropdown" ||
          props.captionLayout === "dropdown-years") && (
          <label>
            <input
              type="checkbox"
              name="reverseYears"
              checked={!!props.reverseYears}
              onChange={(e) =>
                setProps({ ...props, reverseYears: e.target.checked })
              }
              disabled={
                !(
                  props.captionLayout === "dropdown" ||
                  props.captionLayout === "dropdown-years"
                )
              }
            />
            Reverse Dropdown Years
          </label>
        )}
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
