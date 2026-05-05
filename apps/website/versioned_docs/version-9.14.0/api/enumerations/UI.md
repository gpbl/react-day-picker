# Enumeration: UI

Defined in: [src/UI.ts:11](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L11)

Enum representing the UI elements composing DayPicker. These elements are
mapped to [CustomComponents](../type-aliases/CustomComponents.md), [ClassNames](../type-aliases/ClassNames.md), and [Styles](../type-aliases/Styles.md).

Some elements are extended by flags and modifiers.

## Enumeration Members

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| <a id="enumeration-member-captionlabel"></a> `CaptionLabel` | `"caption_label"` | The caption label of the month (when not showing the dropdown navigation). |
| <a id="enumeration-member-chevron"></a> `Chevron` | `"chevron"` | The Chevron SVG element used by navigation buttons and dropdowns. |
| <a id="enumeration-member-day"></a> `Day` | `"day"` | The grid cell with the day's date. Extended by [DayFlag](DayFlag.md) and [SelectionState](SelectionState.md). |
| <a id="enumeration-member-daybutton"></a> `DayButton` | `"day_button"` | The button containing the formatted day's date, inside the grid cell. |
| <a id="enumeration-member-dropdown"></a> `Dropdown` | `"dropdown"` | The dropdown element to select for years and months. |
| <a id="enumeration-member-dropdownroot"></a> `DropdownRoot` | `"dropdown_root"` | The container element of the dropdown. |
| <a id="enumeration-member-dropdowns"></a> `Dropdowns` | `"dropdowns"` | The container of the dropdown navigation (when enabled). |
| <a id="enumeration-member-footer"></a> `Footer` | `"footer"` | The root element of the footer. |
| <a id="enumeration-member-month"></a> `Month` | `"month"` | Wrapper of the month grid. |
| <a id="enumeration-member-monthcaption"></a> `MonthCaption` | `"month_caption"` | Contains the dropdown navigation or the caption label. |
| <a id="enumeration-member-monthgrid"></a> `MonthGrid` | `"month_grid"` | The month grid. |
| <a id="enumeration-member-months"></a> `Months` | `"months"` | The container of the displayed months. |
| <a id="enumeration-member-monthsdropdown"></a> `MonthsDropdown` | `"months_dropdown"` | The dropdown with the months. |
| <a id="enumeration-member-nav"></a> `Nav` | `"nav"` | The navigation bar with the previous and next buttons. |
| <a id="enumeration-member-nextmonthbutton"></a> `NextMonthButton` | `"button_next"` | The next month button in the navigation. * **Since** 9.1.0 |
| <a id="enumeration-member-previousmonthbutton"></a> `PreviousMonthButton` | `"button_previous"` | The previous month button in the navigation. **Since** 9.1.0 |
| <a id="enumeration-member-root"></a> `Root` | `"root"` | The root component displaying the months and the navigation bar. |
| <a id="enumeration-member-week"></a> `Week` | `"week"` | The row containing the week. |
| <a id="enumeration-member-weekday"></a> `Weekday` | `"weekday"` | The column header with the weekday. |
| <a id="enumeration-member-weekdays"></a> `Weekdays` | `"weekdays"` | The row grouping the weekdays in the column headers. |
| <a id="enumeration-member-weeknumber"></a> `WeekNumber` | `"week_number"` | The cell containing the week number. |
| <a id="enumeration-member-weeknumberheader"></a> `WeekNumberHeader` | `"week_number_header"` | The cell header of the week numbers column. |
| <a id="enumeration-member-weeks"></a> `Weeks` | `"weeks"` | The group of row weeks in a month (`tbody`). |
| <a id="enumeration-member-yearsdropdown"></a> `YearsDropdown` | `"years_dropdown"` | The dropdown with the years. |
