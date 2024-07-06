import React from "react";

import Layout from "@theme/Layout";
import * as locales from "date-fns/locale";
import {
  DateRange,
  DayPicker,
  DayPickerProps,
  Mode,
  isDateRange,
  isSingle
} from "react-day-picker";
import { DayPicker as DayPickerUtc } from "react-day-picker/utc";

import { BrowserWindow } from "../components/BrowserWindow";
import { HighlightWithTheme } from "../components/HighlightWithTheme";

import styles from "./playground.module.css";

/**
 * Function to format a json object of props to a jsx source displaying the
 * props as example
 */
function toJSX(props: Partial<DayPickerProps>) {
  return (
    Object.keys(props)
      // @ts-expect-error abc
      .filter((key) => props[key] !== undefined && props[key] !== false)
      .map((key) => {
        // @ts-expect-error abc
        const value = props[key] as string | number | boolean;
        const valueAsString =
          typeof value === "string"
            ? `="${value}"`
            : typeof value === "number"
              ? `={${value}}`
              : value
                ? ""
                : `x={${JSON.stringify(value)}}`;
        return ` ${key}${valueAsString}`;
      })
      .join("\n")
  );
}

export default function Playground() {
  const initialProps: DayPickerProps = {
    mode: "single",
    locale: locales.enUS
  };
  const [props, setProps] = React.useState<DayPickerProps>(initialProps);
  const [selected, setSelected] = React.useState<
    Date | Date[] | DateRange | undefined
  >();
  const [utc, setUtc] = React.useState(false);

  const [accentColor, setAccentColor] = React.useState<string>();
  const [backgroundAccentColor, setAccentBackgroundColor] =
    React.useState<string>();

  const Component = utc ? DayPickerUtc : DayPicker;
  const formattedProps = `<DayPicker${toJSX({ ...props, locale: undefined })} />`;

  return (
    <Layout>
      <style>
        {`
          .rdp-root,
          [data-theme="dark"] .rdp-root {
            ${accentColor ? `--rdp-accent-color: ${accentColor} !important` : ""};
            ${backgroundAccentColor ? `--rdp-accent-background-color: ${backgroundAccentColor} !important` : ""};
          }
        `}
      </style>
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
                  onChange={(e) =>
                    setProps({
                      ...props,
                      captionLayout: e.target.value as
                        | "label"
                        | "dropdown"
                        | "dropdown-months"
                        | "dropdown-years"
                    } as DayPickerProps)
                  }
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
                  onChange={(e) =>
                    setProps({ ...props, hideWeekdayRow: e.target.checked })
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
            <legend>Navigation</legend>
            <div className={styles.fields}>
              <label>
                Number of months:
                <input
                  type="number"
                  min={1}
                  max={12}
                  size={4}
                  value={props.numberOfMonths}
                  name="numberOfMonths"
                  onChange={(e) =>
                    setProps({
                      ...props,
                      numberOfMonths: Number(e.target.value)
                    })
                  }
                />
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hideNavigation"
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
                  onChange={(e) =>
                    setProps({ ...props, disableNavigation: e.target.checked })
                  }
                />
                Disable Navigation
              </label>

              {props.numberOfMonths && props.numberOfMonths > 1 && (
                <label>
                  <input
                    type="checkbox"
                    name="reverseMonths"
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
              {props.numberOfMonths && props.numberOfMonths > 1 && (
                <label>
                  <input
                    type="checkbox"
                    name="pagedNavigation"
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
            </div>
          </fieldset>

          <fieldset>
            <legend>Localization</legend>
            <div className={styles.fields}>
              <label>
                Locale:
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
              </label>
              <label>
                Weeks starts on:
                <select
                  name="weekStartsOn"
                  onChange={(e) =>
                    setProps({
                      ...props,
                      weekStartsOn: (e.target.value
                        ? Number(e.target.value)
                        : undefined) as
                        | DayPickerProps["weekStartsOn"]
                        | undefined
                    })
                  }
                >
                  <option></option>
                  <option value="0">Sunday</option>
                  <option value="1">Monday</option>
                  <option value="2">Tuesday</option>
                  <option value="3">Wednesday</option>
                  <option value="4">Thursday</option>
                  <option value="5">Friday</option>
                  <option value="6">Saturday</option>
                </select>
              </label>
              <label>
                First week contains:
                <select
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
                  <option value="1">Monday</option>
                  <option value="4">Thursday</option>
                </select>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="UTC"
                  onChange={(e) => {
                    setSelected(undefined);
                    setUtc(e.target.checked);
                  }}
                />
                UTC Dates
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ISOWeek"
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
                  onChange={(e) =>
                    setProps({
                      ...props,
                      dir: e.target.checked ? "rtl" : "ltr"
                    })
                  }
                />
                Right-to-left direction
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Selection</legend>
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
                <label>
                  Range Color:
                  <input
                    value={backgroundAccentColor ?? ""}
                    type="color"
                    name="numberOfMonths"
                    onChange={(e) => setAccentBackgroundColor(e.target.value)}
                  />
                </label>
              )}
            </div>
          </fieldset>
        </form>
        <div className={styles.browserWindow}>
          <BrowserWindow url="">
            {/* @ts-expect-error abc */}
            <Component {...props} onSelect={setSelected} selected={selected} />
          </BrowserWindow>
        </div>
        <div className={styles.props}>
          <h2>Selection</h2>
          <p role="status" aria-live="polite">
            {selected ? (
              <div>
                <pre>
                  {props.mode === "single" && selected && selected.toString()}
                  {props.mode === "multiple" &&
                    (selected as Date[] | undefined)?.map((date) => {
                      return (
                        <>
                          {date.toString()}
                          <br />
                        </>
                      );
                    })}
                  {props.mode === "range" && isDateRange(selected) && (
                    <>
                      From: {selected.from && selected.from.toString()}
                      <br />
                      To: {"  "}
                      {selected.to && selected.to.toString()}
                    </>
                  )}
                </pre>
              </div>
            ) : props.mode ? (
              "Pick on a day to start selection."
            ) : (
              "Choose a selection mode to enable selections."
            )}
          </p>
          <h2>Code</h2>
          <HighlightWithTheme code={formattedProps} language="tsx">
            {({ className, style, tokens, getTokenProps }) => (
              <pre style={style} className={className}>
                {tokens.map((line, i) => {
                  return line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ));
                })}
              </pre>
            )}
          </HighlightWithTheme>
        </div>
      </div>
    </Layout>
  );
}
