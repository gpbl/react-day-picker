import type { DayPickerProps } from "react-day-picker";

/**
 * Function to format a json object of props to a jsx source displaying the
 * props as example
 */
export function toJSX(props: Partial<DayPickerProps>) {
  const formatDate = (value: Date) =>
    `={new Date(${value.getFullYear()}, ${value.getMonth()}, ${value.getDate()})}`;

  const formatValue = (value: unknown) => {
    if (value === undefined || value === false) return null;
    if (value instanceof Date) return formatDate(value);
    if (typeof value === "string") return `="${value}"`;
    if (typeof value === "number") return `={${value}}`;
    if (value === true) return "";
    return `={${JSON.stringify(value)}}`;
  };

  return (
    Object.keys(props)
      // @ts-expect-error abc
      .filter((key) => props[key] !== undefined && props[key] !== false)
      .sort((a, b) => a.localeCompare(b))
      .map((key) => {
        // @ts-expect-error abc
        const formattedValue = formatValue(props[key]);
        return formattedValue === null ? "" : ` ${key}${formattedValue}`;
      })
      .join("")
  );
}
