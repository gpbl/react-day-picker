import React from "react";

import {
  type DayPickerProps,
  dateLib,
  defaultDateLib,
  type Numerals,
} from "react-day-picker";
import {
  amET as amETEthiopic,
  enUS as enUSEthiopic,
} from "react-day-picker/ethiopic";
import * as locales from "react-day-picker/locale";
import {
  enUS as enUSPersian,
  faIR as faIRPersian,
} from "react-day-picker/persian";

import styles from "./styles.module.css";
import type { DayPickerPropsWithCalendar } from "./useQueryStringSync";

const timeZones = [
  "UTC",
  "Africa/Cairo",
  "Africa/Johannesburg",
  "Africa/Lagos",
  "America/Buenos_Aires",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Mexico_City",
  "America/New_York",
  "America/Sao_Paulo",
  "America/Toronto",
  "America/Vancouver",
  "Antarctica/Palmer",
  "Asia/Dubai",
  "Asia/Hong_Kong",
  "Asia/Kolkata",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Australia/Brisbane",
  "Australia/Melbourne",
  "Australia/Sydney",
  "Europe/Berlin",
  "Europe/London",
  "Europe/Madrid",
  "Europe/Moscow",
  "Europe/Paris",
  "Europe/Rome",
  "Pacific/Auckland",
  "Pacific/Honolulu",
];

const numerals: { value: Numerals; label: string }[] = [
  { value: "latn", label: "Latin (Western Arabic)" },
  { value: "arab", label: "Arabic-Indic" },
  { value: "arabext", label: "Eastern Arabic-Indic (persian)" },
  { value: "deva", label: "Devanagari" },
  { value: "beng", label: "Bengali" },
  { value: "guru", label: "Gurmukhi" },
  { value: "gujr", label: "Gujarati" },
  { value: "orya", label: "Oriya" },
  { value: "tamldec", label: "Tamil" },
  { value: "telu", label: "Telugu" },
  { value: "knda", label: "Kannada" },
  { value: "mlym", label: "Malayalam" },
  // Ethiopic digits
  // @ts-expect-error "geez" is allowed by DayPicker (numberingSystem)
  { value: "geez" as Numerals, label: "Ge'ez (Ethiopic)" },
];
const calendars: ("persian" | "ethiopic" | "gregorian")[] = [
  "gregorian",
  "persian",
  "ethiopic",
];
const persianLocales = { faIR: faIRPersian, enUS: enUSPersian };
const ethiopicLocales = { amET: amETEthiopic, enUS: enUSEthiopic };

interface LocalizationFieldsetProps {
  props: DayPickerPropsWithCalendar;
  setProps: React.Dispatch<React.SetStateAction<DayPickerPropsWithCalendar>>;
  currentTimeZone: string;
}
export function LocalizationFieldset({
  props,
  setProps,
  currentTimeZone,
}: LocalizationFieldsetProps) {
  return (
    <fieldset>
      <legend>
        Localization{" "}
        <button
          type="button"
          onClick={() => {
            setProps({
              ...props,
              calendar: undefined,
              locale: undefined,
              timeZone: undefined,
              numerals: undefined,
              weekStartsOn: undefined,
              firstWeekContainsDate: undefined,
              ISOWeek: false,
              dir: undefined,
              broadcastCalendar: false,
            });
          }}
        >
          Reset
        </button>
      </legend>
      <div className={styles.fields}>
        <label>
          Calendar:
          <select
            name="calendar"
            value={props.calendar ?? ""}
            onChange={(e) => {
              setProps({
                ...props,
                calendar: e.target.value as
                  | "gregorian"
                  | "persian"
                  | "ethiopic",
                locale:
                  e.target.value === "persian"
                    ? faIRPersian
                    : e.target.value === "ethiopic"
                      ? (amETEthiopic as any)
                      : undefined,
                dir: e.target.value === "persian" ? "rtl" : undefined,
                numerals:
                  e.target.value === "ethiopic"
                    ? // default to Ethiopic numerals
                      // @ts-expect-error allowable in DayPicker
                      ("geez" as Numerals)
                    : props.numerals,
              });
            }}
          >
            <option></option>
            {calendars.map((calendar) => (
              <option key={calendar} value={calendar}>
                {calendar}
              </option>
            ))}
          </select>
        </label>
        <label>
          Time Zone:
          <select
            name="timeZone"
            value={props.timeZone ?? ""}
            onChange={(e) =>
              setProps({
                ...props,
                timeZone: e.target.value,
              })
            }
          >
            <option></option>
            <option value={currentTimeZone}>{currentTimeZone}</option>
            {timeZones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </label>
        <label>
          Locale:
          <select
            name="locale"
            value={props.locale?.code ?? ""}
            onChange={(e) =>
              setProps({
                ...props,
                locale:
                  e.target.value === ""
                    ? undefined
                    : (props.calendar === "persian"
                        ? Object.values(persianLocales)
                        : props.calendar === "ethiopic"
                          ? Object.values(ethiopicLocales)
                          : Object.values(locales)
                      ).find((locale) => locale.code === e.target.value),
              })
            }
          >
            <option value=""></option>
            {(props.calendar === "persian"
              ? Object.values(persianLocales)
              : props.calendar === "ethiopic"
                ? Object.values(ethiopicLocales)
                : Object.values(locales)
            ).map((locale) => (
              <option key={locale.code} value={locale.code}>
                {locale.code}
              </option>
            ))}
          </select>
        </label>

        <label>
          Numerals:
          <select
            style={{ maxWidth: 100 }}
            name="numerals"
            value={props.numerals ?? ""}
            onChange={(e) =>
              setProps({
                ...props,
                numerals: !e.target.value
                  ? undefined
                  : (e.target.value as Numerals),
              })
            }
          >
            <option></option>
            {numerals.map((numeral) => (
              <option key={numeral.value} value={numeral.value}>
                {numeral.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Weeks start on:
          <select
            name="weekStartsOn"
            disabled={props.broadcastCalendar || props.ISOWeek}
            value={props.weekStartsOn ?? ""}
            onChange={(e) =>
              setProps({
                ...props,
                weekStartsOn: (e.target.value
                  ? Number(e.target.value)
                  : undefined) as DayPickerProps["weekStartsOn"] | undefined,
              })
            }
          >
            <option></option>
            {[...Array(7).keys()].map((day) => (
              <option key={day} value={day}>
                {defaultDateLib.format(new Date(2021, 0, day + 3), "EEEE")}
              </option>
            ))}
          </select>
        </label>
        <label>
          First week contains:
          <select
            disabled={props.broadcastCalendar || props.ISOWeek}
            name="firstWeekContainsDate"
            value={props.firstWeekContainsDate ?? ""}
            onChange={(e) =>
              setProps({
                ...props,
                firstWeekContainsDate: Number(
                  e.target.value,
                ) as DayPickerProps["firstWeekContainsDate"],
              })
            }
          >
            <option></option>
            {[1, 4].map((day) => (
              <option key={day} value={day}>
                {dateLib.format(new Date(2021, 0, day), "EEEE")}
              </option>
            ))}
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            name="ISOWeek"
            checked={props.ISOWeek}
            disabled={props.broadcastCalendar}
            onChange={(e) => setProps({ ...props, ISOWeek: e.target.checked })}
          />
          ISO Week
        </label>
        <label>
          <input
            type="checkbox"
            name="rtl"
            checked={props.dir === "rtl"}
            onChange={(e) =>
              setProps({
                ...props,
                dir: e.target.checked ? "rtl" : undefined,
              })
            }
          />
          Right-to-left Direction
        </label>

        <label>
          <input
            type="checkbox"
            name="broadcastCalendar"
            checked={props.broadcastCalendar}
            onChange={(e) =>
              setProps({
                ...props,
                broadcastCalendar: e.target.checked,
                showOutsideDays: e.target.checked
                  ? true
                  : props.showOutsideDays,
              })
            }
          />
          Broadcast Weeks
        </label>
      </div>
    </fieldset>
  );
}
