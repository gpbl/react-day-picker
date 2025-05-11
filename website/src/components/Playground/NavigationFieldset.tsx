import React from "react";

import { startOfMonth } from "date-fns";
import { DayPickerProps } from "react-day-picker";

import styles from "./styles.module.css";

interface NavigationFieldsetProps {
  props: DayPickerProps;
  setProps: React.Dispatch<React.SetStateAction<DayPickerProps>>;
}

export function NavigationFieldset({
  props,
  setProps
}: NavigationFieldsetProps) {
  return (
    <fieldset>
      <legend>
        Navigation{" "}
        <button
          type="button"
          onClick={() =>
            setProps({
              ...props,
              animate: false,
              month: undefined,
              startMonth: undefined,
              endMonth: undefined,
              hideNavigation: false,
              disableNavigation: false,
              numberOfMonths: undefined,
              reverseMonths: false,
              pagedNavigation: false
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
            name="animate"
            checked={props.animate}
            onChange={(e) => setProps({ ...props, animate: e.target.checked })}
          />
          Animate
        </label>
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
              value={props.month ? new Date(props.month).getMonth() + 1 : ""}
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
                    props.endMonth && newStartMonth > new Date(props.endMonth)
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
                props.startMonth ? new Date(props.startMonth).getFullYear() : ""
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
                    props.endMonth && newStartMonth > new Date(props.endMonth)
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
                props.endMonth ? new Date(props.endMonth).getMonth() + 1 : ""
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
                    props.startMonth && newEndMonth < new Date(props.startMonth)
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
                    props.startMonth && newEndMonth < new Date(props.startMonth)
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
  );
}
