import React from "react";

import { startOfMonth } from "date-fns";
import {
  type DateRange,
  type DayPickerProps,
  DateLib,
  DayPicker,
  isDateRange,
  Numerals
} from "react-day-picker";
import * as locales from "react-day-picker/locale";
import {
  DayPicker as DayPickerPersian,
  enUS as enUSPersian,
  faIR as faIRPersian,
  getDateLib
} from "react-day-picker/persian";

import { BrowserWindow } from "../BrowserWindow";
import { HighlightWithTheme } from "../HighlightWithTheme";

import styles from "./styles.module.css";
import { toJSX } from "./toJSX";

const timeZones = [
  "UTC",
  "America/New_York",
  "Europe/London",
  "Asia/Tokyo",
  "Australia/Sydney"
];

const calendars = ["Gregorian", "Persian"];
const persianLocales = { faIR: faIRPersian, enUS: enUSPersian };

const numerals: { value: Numerals; label: string }[] = [
  { value: "latn", label: "Latin (Western Arabic)" },
  { value: "arab", label: "Arabic-Indic" },
  { value: "arabext", label: "Eastern Arabic-Indic (Persian)" },
  { value: "deva", label: "Devanagari" },
  { value: "beng", label: "Bengali" },
  { value: "guru", label: "Gurmukhi" },
  { value: "gujr", label: "Gujarati" },
  { value: "orya", label: "Oriya" },
  { value: "tamldec", label: "Tamil" },
  { value: "telu", label: "Telugu" },
  { value: "knda", label: "Kannada" },
  { value: "mlym", label: "Malayalam" }
];
export function Playground() {
  const initialProps: DayPickerProps = {
    mode: "single",
    locale: locales.enUS
  };
  const [props, setProps] = React.useState<DayPickerProps>(initialProps);
  const [selected, setSelected] = React.useState<
    Date | Date[] | DateRange | undefined
  >();

  const [accentColor, setAccentColor] = React.useState("");
  const [calendar, setCalendar] = React.useState(calendars[0]);

  const [backgroundAccentColor, setBackgroundAccentColor] = React.useState("");
  const [rangeMiddleColor, setRangeMiddleColor] = React.useState<string>();

  let formattedProps = `<DayPicker${toJSX({
    ...props,
    locale: undefined,
    month: undefined,
    dir: calendar === "Persian" && props.dir === "rtl" ? undefined : props.dir
  })} />`;

  if (calendar === "Persian") {
    formattedProps =
      `import { DayPicker } from "react-day-picker/persian";\n\n` +
      formattedProps;
  } else {
    formattedProps =
      `import { DayPicker } from "react-day-picker";\n\n` + formattedProps;
  }
  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const DayPickerComponent =
    calendar === "Persian" ? DayPickerPersian : DayPicker;

  const dateLib =
    calendar === "Persian"
      ? getDateLib({
          locale: (props.locale as locales.Locale) ?? faIRPersian,
          timeZone: props.timeZone
        })
      : new DateLib({
          locale: (props.locale as locales.Locale) ?? locales.enUS,
          timeZone: props.timeZone
        });

  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <form className={styles.form}>
        <fieldset>
          <legend>Customization</legend>
          <div className={styles.fields}>
            <label>
              Caption Layout:
              <select
                name="captionLayout"
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
                <option value="label">Label</option>
                <option value="dropdown">Dropdown</option>
                <option value="dropdown-months">Dropdown months</option>
                <option value="dropdown-years">Dropdown years</option>
              </select>
            </label>
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
                name="hideWeekdayRow"
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
                value={accentColor}
                type="color"
                name="accentColor"
                onChange={(e) => setAccentColor(e.target.value)}
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            Navigation{" "}
            <button
              type="button"
              onClick={() =>
                setProps({
                  ...props,
                  month: undefined,
                  startMonth: undefined,
                  endMonth: undefined,
                  hideNavigation: undefined,
                  disableNavigation: undefined,
                  numberOfMonths: undefined,
                  reverseMonths: undefined,
                  pagedNavigation: undefined
                })
              }
            >
              Reset
            </button>
          </legend>

          <div className={styles.fields}>
            <label>
              Number of months:
              <input
                type="number"
                min={1}
                max={12}
                size={4}
                value={props.numberOfMonths ?? ""}
                name="numberOfMonths"
                onChange={(e) => {
                  const value = e.target.value;
                  setProps({
                    ...props,
                    numberOfMonths:
                      value === "" ? undefined : Math.max(1, Number(value))
                  });
                }}
              />
            </label>

            {props.numberOfMonths !== undefined && props.numberOfMonths > 1 && (
              <label>
                <input
                  type="checkbox"
                  name="reverseMonths"
                  checked={props.reverseMonths}
                  onChange={(e) =>
                    setProps({
                      ...props,
                      reverseMonths: e.target.checked
                    })
                  }
                />
                Reverse Months
              </label>
            )}
            {props.numberOfMonths !== undefined && props.numberOfMonths > 1 && (
              <label>
                <input
                  type="checkbox"
                  name="pagedNavigation"
                  checked={props.pagedNavigation}
                  onChange={(e) =>
                    setProps({
                      ...props,
                      pagedNavigation: e.target.checked
                    })
                  }
                />
                Paged Navigation
              </label>
            )}
            <label>
              <input
                type="checkbox"
                name="hideNavigation"
                checked={props.hideNavigation}
                onChange={(e) =>
                  setProps({ ...props, hideNavigation: e.target.checked })
                }
              />
              Hide Navigation
            </label>
            <label>
              <input
                type="checkbox"
                name="disableNavigation"
                checked={props.disableNavigation}
                onChange={(e) =>
                  setProps({ ...props, disableNavigation: e.target.checked })
                }
              />
              Disable Navigation
            </label>
            <hr
              style={{
                borderTop: "1px solid var(--ifm-color-emphasis-200)",
                marginBottom: "1rem",
                marginTop: "1rem"
              }}
            />
            <label>
              Month:
              <div>
                <input
                  type="number"
                  min={1}
                  max={12}
                  value={
                    props.month ? new Date(props.month).getMonth() + 1 : ""
                  }
                  name="month"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setProps({
                        ...props,
                        month: undefined,
                        startMonth: undefined,
                        endMonth: undefined
                      });
                      return;
                    }
                    const newMonth = Number(e.target.value) - 1;
                    const newDate = props.month
                      ? new Date(props.month)
                      : new Date();
                    newDate.setMonth(newMonth);
                    const newMonthDate = startOfMonth(newDate);
                    setProps({
                      ...props,
                      month: newMonthDate,
                      startMonth: undefined,
                      endMonth: undefined
                    });
                  }}
                />

                <input
                  type="number"
                  min={1900}
                  max={2100}
                  value={props.month ? new Date(props.month).getFullYear() : ""}
                  name="year"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setProps({
                        ...props,
                        month: undefined,
                        startMonth: undefined,
                        endMonth: undefined
                      });
                      return;
                    }
                    const newYear = Number(e.target.value);
                    const newDate = props.month
                      ? new Date(props.month)
                      : new Date();
                    newDate.setFullYear(newYear);
                    const newMonthDate = startOfMonth(newDate);
                    setProps({
                      ...props,
                      month: newMonthDate,
                      startMonth: undefined,
                      endMonth: undefined
                    });
                  }}
                />
              </div>
            </label>
            <label>
              Start month:
              <div>
                <input
                  type="number"
                  min={1}
                  max={12}
                  value={
                    props.startMonth
                      ? new Date(props.startMonth).getMonth() + 1
                      : ""
                  }
                  name="startMonthMonth"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setProps({
                        ...props,
                        startMonth: undefined,
                        month: props.month
                      });
                      return;
                    }
                    const newMonth = Number(e.target.value) - 1;
                    const newDate = props.startMonth
                      ? new Date(props.startMonth)
                      : new Date();
                    newDate.setMonth(newMonth);
                    const newStartMonth = startOfMonth(newDate);
                    setProps({
                      ...props,
                      startMonth: newStartMonth,
                      endMonth:
                        props.endMonth &&
                        newStartMonth > new Date(props.endMonth)
                          ? undefined
                          : props.endMonth,
                      month:
                        props.month && new Date(props.month) < newStartMonth
                          ? newStartMonth
                          : (props.month ?? newStartMonth)
                    });
                  }}
                />

                <input
                  type="number"
                  min={1900}
                  max={2100}
                  value={
                    props.startMonth
                      ? new Date(props.startMonth).getFullYear()
                      : ""
                  }
                  name="startMonthYear"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setProps({
                        ...props,
                        startMonth: undefined,
                        month: props.month
                      });
                      return;
                    }
                    const newYear = Number(e.target.value);
                    const newDate = props.startMonth
                      ? new Date(props.startMonth)
                      : new Date();
                    newDate.setFullYear(newYear);
                    const newStartMonth = startOfMonth(newDate);
                    setProps({
                      ...props,
                      startMonth: newStartMonth,
                      endMonth:
                        props.endMonth &&
                        newStartMonth > new Date(props.endMonth)
                          ? undefined
                          : props.endMonth,
                      month:
                        props.month && new Date(props.month) < newStartMonth
                          ? newStartMonth
                          : (props.month ?? newStartMonth)
                    });
                  }}
                />
              </div>
            </label>
            <label>
              End month:
              <div>
                <input
                  type="number"
                  min={1}
                  max={12}
                  value={
                    props.endMonth
                      ? new Date(props.endMonth).getMonth() + 1
                      : ""
                  }
                  name="endMonthMonth"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setProps({
                        ...props,
                        endMonth: undefined,
                        month: props.month
                      });
                      return;
                    }
                    const newMonth = Number(e.target.value) - 1;
                    const newDate = props.endMonth
                      ? new Date(props.endMonth)
                      : new Date();
                    newDate.setMonth(newMonth);
                    const newEndMonth = startOfMonth(newDate);
                    setProps({
                      ...props,
                      endMonth: newEndMonth,
                      startMonth:
                        props.startMonth &&
                        newEndMonth < new Date(props.startMonth)
                          ? undefined
                          : props.startMonth,
                      month:
                        props.month && new Date(props.month) > newEndMonth
                          ? newEndMonth
                          : props.month
                    });
                  }}
                />

                <input
                  type="number"
                  min={1900}
                  max={2100}
                  value={
                    props.endMonth ? new Date(props.endMonth).getFullYear() : ""
                  }
                  name="endMonthYear"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setProps({
                        ...props,
                        endMonth: undefined,
                        month: props.month
                      });
                      return;
                    }
                    const newYear = Number(e.target.value);
                    const newDate = props.endMonth
                      ? new Date(props.endMonth)
                      : new Date();
                    newDate.setFullYear(newYear);
                    const newEndMonth = startOfMonth(newDate);
                    setProps({
                      ...props,
                      endMonth: newEndMonth,
                      startMonth:
                        props.startMonth &&
                        newEndMonth < new Date(props.startMonth)
                          ? undefined
                          : props.startMonth,
                      month:
                        props.month && new Date(props.month) > newEndMonth
                          ? newEndMonth
                          : props.month
                    });
                  }}
                />
              </div>
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            Selection{" "}
            <button type="button" onClick={() => setSelected(undefined)}>
              Reset
            </button>
          </legend>
          <div className={styles.fields}>
            <label>
              Selection mode:
              <select
                name="mode"
                onChange={(e) => {
                  const mode = e.target.value || undefined;
                  const newProps = {
                    ...props,
                    mode
                  };
                  setSelected(undefined);
                  // @ts-expect-error Not working well with the union type
                  setProps(newProps);
                }}
                value={props.mode}
              >
                <option></option>
                <option value="single">single</option>
                <option value="multiple">multiple</option>
                <option value="range">range</option>
              </select>
            </label>
            {props.mode && (
              <label>
                <input
                  type="checkbox"
                  checked={props.required}
                  name="required"
                  onChange={(e) => {
                    setSelected(undefined);
                    // @ts-expect-error abc
                    setProps({ ...props, required: e.target.checked });
                  }}
                />
                Required
              </label>
            )}
            {props.mode === "range" || props.mode === "multiple" ? (
              <label>
                Min Selection:
                <input
                  type="number"
                  min={0}
                  max={12}
                  size={4}
                  name="min"
                  value={props.min}
                  onChange={(e) => {
                    setProps({
                      ...props,
                      min: Number(e.target.value)
                    });
                  }}
                />
              </label>
            ) : null}
            {props.mode === "range" || props.mode === "multiple" ? (
              <label>
                Max Selection:
                <input
                  type="number"
                  min={0}
                  max={12}
                  size={4}
                  name="max"
                  value={props.max}
                  onChange={(e) => {
                    setProps({
                      ...props,
                      max: Number(e.target.value)
                    });
                  }}
                />
              </label>
            ) : null}
            {props.mode === "range" && (
              <>
                <label>
                  Range Background:
                  <input
                    value={backgroundAccentColor ?? ""}
                    type="color"
                    onChange={(e) => setBackgroundAccentColor(e.target.value)}
                  />
                </label>
                <label>
                  Range Foreground:
                  <input
                    value={rangeMiddleColor ?? ""}
                    type="color"
                    onChange={(e) => setRangeMiddleColor(e.target.value)}
                  />
                </label>
              </>
            )}
          </div>
        </fieldset>
        <fieldset>
          <legend>Localization </legend>
          <div className={styles.fields}>
            <label>
              Time Zone:
              <select
                name="timeZone"
                value={props.timeZone}
                onChange={(e) =>
                  setProps({
                    ...props,
                    timeZone: e.target.value
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
              Calendar:
              <select
                name="calendar"
                value={calendar}
                onChange={(e) => {
                  setProps({
                    ...props,
                    dir: e.target.value === "Persian" ? "rtl" : "ltr",
                    locale:
                      e.target.value === "Persian" ? faIRPersian : props.locale
                  });
                  setCalendar(e.target.value);
                }}
              >
                {calendars.map((calendar) => (
                  <option key={calendar} value={calendar}>
                    {calendar}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Locale:
              {calendar === "Persian" ? (
                <select
                  name="locale"
                  value={Object.keys(persianLocales).find(
                    (locale) =>
                      persianLocales[locale as keyof typeof persianLocales] ===
                      props.locale
                  )}
                  onChange={(e) =>
                    setProps({
                      ...props,
                      locale:
                        persianLocales[
                          e.target.value as keyof typeof persianLocales
                        ]
                    })
                  }
                >
                  {Object.keys(persianLocales).map((locale) => (
                    <option key={locale} value={locale}>
                      {
                        persianLocales[locale as keyof typeof persianLocales]
                          .code
                      }
                    </option>
                  ))}
                </select>
              ) : (
                <select
                  name="locale"
                  value={Object.keys(locales).find(
                    (locale) =>
                      locales[locale as keyof typeof locales] === props.locale
                  )}
                  onChange={(e) =>
                    setProps({
                      ...props,
                      locale: locales[e.target.value as keyof typeof locales]
                    })
                  }
                >
                  {Object.keys(locales).map((locale) => (
                    <option key={locale} value={locale}>
                      {locales[locale as keyof typeof locales].code}
                    </option>
                  ))}
                </select>
              )}
            </label>

            <label>
              Numerals:
              <select
                style={{ maxWidth: 100 }}
                name="numerals"
                value={
                  numerals.find((numeral) => numeral.value === props.numerals)
                    ?.value
                }
                onChange={(e) =>
                  setProps({
                    ...props,
                    numerals:
                      e.target.value === ""
                        ? undefined
                        : (e.target.value as Numerals)
                  })
                }
              >
                <option value=""></option>
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
                value={props.weekStartsOn}
                onChange={(e) =>
                  setProps({
                    ...props,
                    weekStartsOn: (e.target.value
                      ? Number(e.target.value)
                      : undefined) as DayPickerProps["weekStartsOn"] | undefined
                  })
                }
              >
                <option></option>
                {[...Array(7).keys()].map((day) => (
                  <option key={day} value={day}>
                    {dateLib.format(new Date(2021, 0, day + 3), "EEEE")}
                  </option>
                ))}
              </select>
            </label>
            <label>
              First week contains:
              <select
                disabled={props.broadcastCalendar || props.ISOWeek}
                name="firstWeekContainsDate"
                onChange={(e) =>
                  setProps({
                    ...props,
                    firstWeekContainsDate: Number(
                      e.target.value
                    ) as DayPickerProps["firstWeekContainsDate"]
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
                onChange={(e) =>
                  setProps({ ...props, ISOWeek: e.target.checked })
                }
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
                    dir: e.target.checked ? "rtl" : "ltr"
                  })
                }
              />
              Right-to-left direction
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
                      : props.showOutsideDays
                  })
                }
              />
              Broadcast Weeks
            </label>
          </div>
        </fieldset>
      </form>
      <div className={styles.browserWindow}>
        <BrowserWindow
          url=""
          styleStr={`
          .rdp-root,
          [data-theme="dark"] .rdp-root {
            ${accentColor ? `--rdp-accent-color: ${accentColor} !important` : ""};
            ${backgroundAccentColor ? `--rdp-accent-background-color: ${backgroundAccentColor} !important` : ""};
            ${rangeMiddleColor ? `--rdp-range_middle-color: ${rangeMiddleColor} !important` : ""};
          }
        `}
        >
          <DayPickerComponent
            {...props}
            onSelect={setSelected}
            onMonthChange={(month) => {
              setProps({ ...props, month });
            }}
            // @ts-expect-error abc
            selected={selected}
          />
        </BrowserWindow>
      </div>
      <div className={styles.props}>
        <h2>Selection</h2>
        <p role="status" aria-live="polite">
          {selected ? (
            <div>
              <pre>
                {props.mode === "single" && selected && (
                  <>
                    {String(selected)} -{" "}
                    {dateLib.format(selected as Date, "EEEE, d MMMM yyyy")}
                  </>
                )}
                {props.mode === "multiple" &&
                  (selected as Date[] | undefined)?.map((date) => {
                    return (
                      <>
                        {String(date)} -{" "}
                        {dateLib.format(date, "EEEE, d MMMM yyyy")}
                        <br />
                      </>
                    );
                  })}
                {props.mode === "range" && isDateRange(selected) && (
                  <>
                    From:{" "}
                    {selected.from && (
                      <>
                        {String(selected.from)} -{" "}
                        {dateLib.format(selected.from, "EEEE, d MMMM yyyy")}
                      </>
                    )}
                    <br />
                    To: {"  "}
                    {selected.to && (
                      <>
                        {String(selected.to)} -{" "}
                        {dateLib.format(selected.to, "EEEE, d MMMM yyyy")}
                      </>
                    )}
                  </>
                )}
              </pre>
            </div>
          ) : props.mode ? (
            "Pick on a day to start selection."
          ) : (
            "Choose a selection mode to display the selected days."
          )}
        </p>
        <h2>Code</h2>
        <HighlightWithTheme code={formattedProps} language="tsx" />
      </div>
    </div>
  );
}
