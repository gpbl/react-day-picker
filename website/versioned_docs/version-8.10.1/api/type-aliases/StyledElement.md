# Type alias: StyledElement\<T\>

> **StyledElement**\<`T`\>: \{`"button"`: `T`;`"button_reset"`: `T`;`"caption"`: `T`;`"caption_between"`: `T`;`"caption_dropdowns"`: `T`;`"caption_end"`: `T`;`"caption_label"`: `T`;`"caption_start"`: `T`;`"cell"`: `T`;`"day"`: `T`;`"day_disabled"`: `T`;`"day_hidden"`: `T`;`"day_outside"`: `T`;`"day_range_end"`: `T`;`"day_range_middle"`: `T`;`"day_range_start"`: `T`;`"day_selected"`: `T`;`"day_today"`: `T`;`"dropdown"`: `T`;`"dropdown_icon"`: `T`;`"dropdown_month"`: `T`;`"dropdown_year"`: `T`;`"head"`: `T`;`"head_cell"`: `T`;`"head_row"`: `T`;`"month"`: `T`;`"months"`: `T`;`"multiple_months"`: `T`;`"nav"`: `T`;`"nav_button"`: `T`;`"nav_button_next"`: `T`;`"nav_button_previous"`: `T`;`"nav_icon"`: `T`;`"root"`: `T`;`"row"`: `T`;`"table"`: `T`;`"tbody"`: `T`;`"tfoot"`: `T`;`"vhidden"`: `T`;`"weeknumber"`: `T`;`"with_weeknumber"`: `T`; \}

The style (either via class names or via in-line styles) of an element.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `string` \| `CSSProperties` |

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `button` | `T` | The buttons. |
| `button_reset` | `T` | The style for resetting the buttons. |
| `caption` | `T` | The caption (showing the calendar heading and the navigation) |
| `caption_between` | `T` | The caption when between two months (when `multipleMonths > 2`). |
| `caption_dropdowns` | `T` | The drop-downs container. |
| `caption_end` | `T` | The caption when at the end of a series of months. |
| `caption_label` | `T` | The caption label. |
| `caption_start` | `T` | The caption when at the start of a series of months. |
| `cell` | `T` | The table cell containing the day element. |
| `day` | `T` | The day element: it is a `span` when not interactive, a `button` otherwise. |
| `day_disabled` | `T` | The day when disabled. |
| `day_hidden` | `T` | The day when hidden. |
| `day_outside` | `T` | The day when outside the month. |
| `day_range_end` | `T` | The day when at the end of a selected range. |
| `day_range_middle` | `T` | The day in the middle of a selected range: it does not include the "from"<br />and the "to" days. |
| `day_range_start` | `T` | The day when at the start of a selected range. |
| `day_selected` | `T` | The day when selected. |
| `day_today` | `T` | The day when today. |
| `dropdown` | `T` | The drop-down (select) element. |
| `dropdown_icon` | `T` | The drop-down icon. |
| `dropdown_month` | `T` | The drop-down to change the month. |
| `dropdown_year` | `T` | The drop-down to change the year. |
| `head` | `T` | The table’s head. |
| `head_cell` | `T` | The head cell. |
| `head_row` | `T` | The row in the head. |
| `month` | `T` | The table wrapper. |
| `months` | `T` | The months wrapper. |
| `multiple_months` | `T` | The root element when `numberOfMonths > 1`. |
| `nav` | `T` | The navigation container. |
| `nav_button` | `T` | The navigation button. |
| `nav_button_next` | `T` | The "next month" navigation button. |
| `nav_button_previous` | `T` | The "previous month" navigation button. |
| `nav_icon` | `T` | The icon for the navigation button. |
| `root` | `T` | The root element. |
| `row` | `T` | The table’s row. |
| `table` | `T` | Table containing the monthly calendar. |
| `tbody` | `T` | The table body. |
| `tfoot` | `T` | The table footer. |
| `vhidden` | `T` | The style of an element visually hidden. |
| `weeknumber` | `T` | The weeknumber displayed in the column. |
| `with_weeknumber` | `T` | The root element when `showWeekNumber={true}`. |

## Source

[src/types/Styles.ts:4](https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/types/Styles.ts#L4)
