import { getDefaultClassNames } from "./getDefaultClassNames";

test("should return the default classnames", () => {
  expect(getDefaultClassNames()).toStrictEqual({
    button_next: "rdp-button_next",
    button_previous: "rdp-button_previous",
    root: "rdp-root",
    caption_label: "rdp-caption_label",
    chevron: "rdp-chevron",
    day: "rdp-day",
    day_button: "rdp-day_button",
    disabled: "rdp-disabled",
    dropdown_nav: "rdp-dropdown_nav",
    dropdown_root: "rdp-dropdown_root",
    dropdown: "rdp-dropdown",
    focused: "rdp-focused",
    footer: "rdp-footer",
    hidden: "rdp-hidden",
    month_caption: "rdp-month_caption",
    month_grid: "rdp-month_grid",
    month: "rdp-month",
    weeks: "rdp-weeks",
    months_dropdown: "rdp-months_dropdown",
    months: "rdp-months",
    nav: "rdp-nav",
    outside: "rdp-outside",
    range_end: "rdp-range_end",
    range_middle: "rdp-range_middle",
    range_start: "rdp-range_start",
    selected: "rdp-selected",
    today: "rdp-today",
    week_number: "rdp-week_number",
    week_number_header: "rdp-week_number_header",
    week: "rdp-week",
    weekday: "rdp-weekday",
    weekdays: "rdp-weekdays",
    years_dropdown: "rdp-years_dropdown"
  });
});
