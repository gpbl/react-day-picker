import React from "react";

import {
  type DayPickerProps,
  dateLib,
  defaultDateLib,
  type Numerals,
} from "react-day-picker";
import {
  enUS as enUSBuddhist,
  th as thBuddhist,
} from "react-day-picker/buddhist";
import {
  amET as amETEthiopic,
  enUS as enUSEthiopic,
} from "react-day-picker/ethiopic";
import { enUS as enUSHebrew, he as heHebrew } from "react-day-picker/hebrew";
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
  { value: "geez" as Numerals, label: "Ge'ez (Ethiopic)" },
  // Thai digits
  { value: "thai" as Numerals, label: "Thai" },
];
const calendars: ("persian" | "ethiopic" | "buddhist" | "gregorian" | "hebrew")[] = [
  "gregorian",
  "persian",
  "ethiopic",
  "buddhist",
  "hebrew",
];
const persianLocales = { faIR: faIRPersian, enUS: enUSPersian };
const ethiopicLocales = { amET: amETEthiopic, enUS: enUSEthiopic };
const buddhistLocales = { th: thBuddhist, enUS: enUSBuddhist };
const hebrewLocales = { he: heHebrew, enUS: enUSHebrew };

type CalendarType = NonNullable<DayPickerPropsWithCalendar["calendar"]>;

const allLocales = Object.values(locales) as DayPickerProps["locale"][];

const calendarLocales: Record<CalendarType, DayPickerProps["locale"][]> = {
  gregorian: allLocales,
  persian: Object.values(persianLocales),
  ethiopic: Object.values(ethiopicLocales),
  buddhist: Object.values(buddhistLocales),
  hebrew: Object.values(hebrewLocales),
};

const calendarDefaults: Partial<
  Record<
    CalendarType,
    {
      locale?: DayPickerProps["locale"];
      dir?: DayPickerPropsWithCalendar["dir"];
      numerals?: Numerals;
    }
  >
> = {
  persian: { locale: faIRPersian, dir: "rtl" },
  ethiopic: { locale: amETEthiopic, numerals: "geez" as Numerals },
  buddhist: { locale: thBuddhist, numerals: "thai" as Numerals },
  hebrew: { numerals: "latn" as Numerals },
};

function getLocalesForCalendar(
  calendar?: DayPickerPropsWithCalendar["calendar"],
) {
  if (!calendar) {
    return allLocales;
  }
  return calendarLocales[calendar as CalendarType] ?? allLocales;
}

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
  const availableLocales = React.useMemo(
    () => getLocalesForCalendar(props.calendar),
    [props.calendar],
  );

  const handleCalendarChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const rawValue = event.target.value as CalendarType | "";
    const calendar = (rawValue === "" ? undefined : rawValue) as DayPickerPropsWithCalendar["calendar"];
    const defaults = calendar
      ? calendarDefaults[calendar as CalendarType]
      : undefined;

    const nextProps: DayPickerPropsWithCalendar = {
      ...props,
      calendar,
      locale: calendar ? defaults?.locale ?? undefined : undefined,
      dir: calendar ? defaults?.dir ?? undefined : undefined,
    };

    if (defaults?.numerals) {
      nextProps.numerals = defaults.numerals;
    }

    setProps(nextProps);
  };

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (!value) {
      setProps({ ...props, locale: undefined });
      return;
    }

    const locale = availableLocales.find((item) => item.code === value);
    setProps({ ...props, locale });
  };

  const handleNumeralsChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;

    if (!value) {
      setProps({ ...props, numerals: undefined });
      return;
    }

    setProps({ ...props, numerals: value as Numerals });
  };

  const handleWeekStartsOnChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;
    const nextProps: DayPickerPropsWithCalendar = { ...props };

    if (!value) {
      nextProps.weekStartsOn = undefined;
    } else {
      nextProps.weekStartsOn = Number(value) as DayPickerProps["weekStartsOn"];
    }

    setProps(nextProps);
  };

  const handleFirstWeekContainsDateChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;
    const nextProps: DayPickerPropsWithCalendar = { ...props };

    if (!value) {
      nextProps.firstWeekContainsDate = undefined;
    } else {
      nextProps.firstWeekContainsDate = Number(
        value,
      ) as DayPickerProps["firstWeekContainsDate"];
    }

    setProps(nextProps);
  };

  const handleDirectionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { checked } = event.target;
    const nextProps: DayPickerPropsWithCalendar = { ...props };

    if (checked) {
      nextProps.dir = "rtl";
    } else {
      nextProps.dir = undefined;
    }

    setProps(nextProps);
  };

  const handleBroadcastCalendarChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { checked } = event.target;
    const nextProps: DayPickerPropsWithCalendar = {
      ...props,
      broadcastCalendar: checked,
    };

    if (checked) {
      nextProps.showOutsideDays = true;
    }

    setProps(nextProps);
  };

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
            onChange={handleCalendarChange}
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
            onChange={handleLocaleChange}
          >
            <option value=""></option>
            {availableLocales.map((locale) => (
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
            onChange={handleNumeralsChange}
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
            onChange={handleWeekStartsOnChange}
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
            onChange={handleFirstWeekContainsDateChange}
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
            onChange={handleDirectionChange}
          />
          Right-to-left Direction
        </label>

        <label>
          <input
            type="checkbox"
            name="broadcastCalendar"
            checked={props.broadcastCalendar}
            onChange={handleBroadcastCalendarChange}
          />
          Broadcast Weeks
        </label>
      </div>
    </fieldset>
  );
}
