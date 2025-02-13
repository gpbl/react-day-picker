import { DayPickerProps } from "react-day-picker";

/**
 * Function to format a json object of props to a jsx source displaying the
 * props as example
 */
export function toJSX(props: Partial<DayPickerProps>) {
  return (
    Object.keys(props)
      // @ts-expect-error abc
      .filter((key) => props[key] !== undefined && props[key] !== false)
      .sort((a, b) => a.localeCompare(b))
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
      .join("")
  );
}
