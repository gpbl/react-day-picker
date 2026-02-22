import React from "react";

import type { DateRange, DayPickerProps } from "react-day-picker";

import styles from "./styles.module.css";

interface SelectionFieldsetProps {
  props: DayPickerProps;
  setProps: React.Dispatch<React.SetStateAction<DayPickerProps>>;
  selected: Date | Date[] | DateRange | undefined;
  setSelected: React.Dispatch<
    React.SetStateAction<Date | Date[] | DateRange | undefined>
  >;
  backgroundAccentColor: string;
  setBackgroundAccentColor: React.Dispatch<React.SetStateAction<string>>;
  rangeMiddleColor: string | undefined;
  setRangeMiddleColor: React.Dispatch<React.SetStateAction<string>>;
}

export function SelectionFieldset({
  props,
  setProps,
  setSelected,
  backgroundAccentColor,
  setBackgroundAccentColor,
  rangeMiddleColor,
  setRangeMiddleColor,
}: SelectionFieldsetProps) {
  return (
    <fieldset>
      <legend>
        Selection{" "}
        <button
          type="button"
          onClick={() => {
            setSelected(undefined);
            setProps({
              ...props,
              // @ts-expect-error Not working well with the union type
              mode: undefined,
              // @ts-expect-error Not working well with the union type
              required: undefined,
              min: undefined,
              max: undefined,
              selected: undefined,
            });
            setBackgroundAccentColor("");
            setRangeMiddleColor("");
          }}
        >
          Reset
        </button>
      </legend>
      <div className={styles.fields}>
        <label>
          Selection mode:
          <select
            name="mode"
            value={props.mode ?? ""}
            onChange={(e) => {
              const mode = e.target.value || undefined;
              const newProps = {
                ...props,
                mode,
              };
              setSelected(undefined);
              // @ts-expect-error Not working well with the union type
              setProps(newProps);
            }}
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
        {props.mode === "range" && (
          <label>
            <input
              type="checkbox"
              checked={props.rangeResetOnSelect}
              name="rangeResetOnSelect"
              onChange={(e) => {
                setProps({ ...props, rangeResetOnSelect: e.target.checked });
              }}
            />
            Reset range on select
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
              value={props.min ?? ""}
              onChange={(e) => {
                setProps({
                  ...props,
                  min: Number(e.target.value),
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
              value={props.max ?? ""}
              onChange={(e) => {
                setProps({
                  ...props,
                  max: Number(e.target.value),
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
  );
}
