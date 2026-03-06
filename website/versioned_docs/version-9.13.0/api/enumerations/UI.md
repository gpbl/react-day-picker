# Enumeration: UI

Defined in: [src/UI.ts:11](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/UI.ts#L11)

Enum representing the UI elements composing DayPicker. These elements are
mapped to [CustomComponents](../type-aliases/CustomComponents.md), [ClassNames](../type-aliases/ClassNames.md), and [Styles](../type-aliases/Styles.md).

Some elements are extended by flags and modifiers.

## Enumeration Members

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| <a id="captionlabel"></a> `CaptionLabel` | `"caption_label"` | The caption label of the month (when not showing the dropdown navigation). |
| <a id="chevron"></a> `Chevron` | `"chevron"` | The Chevron SVG element used by navigation buttons and dropdowns. |
| <a id="day"></a> `Day` | `"day"` | The grid cell with the day's date. Extended by [DayFlag](DayFlag.md) and [SelectionState](SelectionState.md). |
| <a id="daybutton"></a> `DayButton` | `"day_button"` | The button containing the formatted day's date, inside the grid cell. |
| <a id="dropdown"></a> `Dropdown` | `"dropdown"` | The dropdown element to select for years and months. |
| <a id="dropdownroot"></a> `DropdownRoot` | `"dropdown_root"` | The container element of the dropdown. |
| <a id="dropdowns"></a> `Dropdowns` | `"dropdowns"` | The container of the dropdown navigation (when enabled). |
| <a id="footer"></a> `Footer` | `"footer"` | The root element of the footer. |
| <a id="month"></a> `Month` | `"month"` | Wrapper of the month grid. |
| <a id="monthcaption"></a> `MonthCaption` | `"month_caption"` | Contains the dropdown navigation or the caption label. |
| <a id="monthgrid"></a> `MonthGrid` | `"month_grid"` | The month grid. |
| <a id="months"></a> `Months` | `"months"` | The container of the displayed months. |
| <a id="monthsdropdown"></a> `MonthsDropdown` | `"months_dropdown"` | The dropdown with the months. |
| <a id="nav"></a> `Nav` | `"nav"` | The navigation bar with the previous and next buttons. |
| <a id="nextmonthbutton"></a> `NextMonthButton` | `"button_next"` | The next month button in the navigation. * **Since** 9.1.0 |
| <a id="previousmonthbutton"></a> `PreviousMonthButton` | `"button_previous"` | The previous month button in the navigation. **Since** 9.1.0 |
| <a id="root"></a> `Root` | `"root"` | The root component displaying the months and the navigation bar. |
| <a id="week"></a> `Week` | `"week"` | The row containing the week. |
| <a id="weekday"></a> `Weekday` | `"weekday"` | The column header with the weekday. |
| <a id="weekdays"></a> `Weekdays` | `"weekdays"` | The row grouping the weekdays in the column headers. |
| <a id="weeknumber"></a> `WeekNumber` | `"week_number"` | The cell containing the week number. |
| <a id="weeknumberheader"></a> `WeekNumberHeader` | `"week_number_header"` | The cell header of the week numbers column. |
| <a id="weeks"></a> `Weeks` | `"weeks"` | The group of row weeks in a month (`tbody`). |
| <a id="yearsdropdown"></a> `YearsDropdown` | `"years_dropdown"` | The dropdown with the years. |
