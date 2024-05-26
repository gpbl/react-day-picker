// TODO: reduce amount of code or keep verbose?
import { UI } from "../UI";
import { ClassNames } from "../types";

export function getDefaultClassNames(): Required<ClassNames> {
  return {
    [UI.Root]: "rdp",
    [UI.MultipleMonths]: "rdp-multiple_months",
    [UI.WithWeekNumber]: "rdp-with_weeknumber",
    [UI.HideWeekdays]: "rdp-hide_weekdays",

    [UI.MonthCaption]: "rdp-month_caption",

    [UI.CaptionStart]: "rdp-caption_start",
    [UI.CaptionEnd]: "rdp-caption_end",
    [UI.CaptionBetween]: "rdp-caption_between",
    [UI.CaptionLabel]: "rdp-caption_label",

    [UI.CaptionDropdowns]: "rdp-caption_dropdowns",

    [UI.Dropdown]: "rdp-dropdown",
    [UI.DropdownMonth]: "rdp-dropdown_month",
    [UI.DropdownYear]: "rdp-dropdown_year",
    [UI.DropdownIcon]: "rdp-dropdown_icon",

    [UI.MonthsWrapper]: "rdp-months_wrapper",
    [UI.MonthGridWrapper]: "rdp-month_grid_wrapper",
    [UI.MonthGrid]: "rdp-month_grid",
    [UI.MonthRowGroup]: "rdp-month_rowgroup",

    [UI.WeekDaysRow]: "rdp-weekdays_row",
    [UI.WeekDayColumnHeader]: "rdp-weekday_columnheader",

    [UI.WeekRow]: "rdp-week_row",

    [UI.WeekNumberRowHeader]: "rdp-weeknumber_rowheader",

    [UI.Nav]: "rdp-nav",
    [UI.ButtonPrevious]: "rdp-button_previous",
    [UI.ButtonNext]: "rdp-button_next",

    [UI.ButtonIcon]: "rdp-button_icon",

    [UI.Day]: "rdp-day",
    [UI.DayToday]: "rdp-day_today",
    [UI.DayOutside]: "rdp-day_outside",
    [UI.DaySelected]: "rdp-day_selected",
    [UI.DayDisabled]: "rdp-day_disabled",
    [UI.DayHidden]: "rdp-day_hidden",
    [UI.DayRangeStart]: "rdp-day_range_start",
    [UI.DayRangeEnd]: "rdp-day_range_end",
    [UI.DayRangeMiddle]: "rdp-day_range_middle",

    [UI.Caption]: "rdp-caption",
    [UI.Head]: "rdp-head",
    [UI.HeadRow]: "rdp-head_row",
    [UI.Row]: "rdp-row",
    [UI.HeadCell]: "rdp-head_cell",
    [UI.Cell]: "rdp-cell",
    [UI.Footer]: "rdp-footer",
    [UI.DropdownNav]: "rdp-dropdown_nav",
    [UI.MonthsDropdown]: "rdp-months_dropdown",
    [UI.Select]: "rdp-select",
    [UI.DropdownRoot]: "rdp-dropdown_root",
    [UI.DayExcluded]: "rdp-day_excluded",
    [UI.DayFocusable]: "rdp-",
    [UI.DayFocused]: "rdp-day_focused"
  };
}
