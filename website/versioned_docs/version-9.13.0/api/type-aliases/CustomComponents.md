# Type Alias: CustomComponents

> **CustomComponents** = \{ `Button`: *typeof* `components.Button`; `CaptionLabel`: *typeof* [`CaptionLabel`](../functions/CaptionLabel.md); `Chevron`: *typeof* [`Chevron`](../functions/Chevron.md); `Day`: *typeof* [`Day`](../functions/Day.md); `DayButton`: *typeof* [`DayButton`](../functions/DayButton.md); `Dropdown`: *typeof* [`Dropdown`](../functions/Dropdown.md); `DropdownNav`: *typeof* [`DropdownNav`](../functions/DropdownNav.md); `Footer`: *typeof* [`Footer`](../functions/Footer.md); `Month`: *typeof* [`Month`](../functions/Month.md); `MonthCaption`: *typeof* [`MonthCaption`](../functions/MonthCaption.md); `MonthGrid`: *typeof* [`MonthGrid`](../functions/MonthGrid.md); `Months`: *typeof* [`Months`](../functions/Months.md); `MonthsDropdown`: *typeof* [`MonthsDropdown`](../functions/MonthsDropdown.md); `Nav`: *typeof* [`Nav`](../functions/Nav.md); `NextMonthButton`: *typeof* [`NextMonthButton`](../functions/NextMonthButton.md); `Option`: *typeof* [`Option`](../functions/Option.md); `PreviousMonthButton`: *typeof* [`PreviousMonthButton`](../functions/PreviousMonthButton.md); `Root`: *typeof* [`Root`](../functions/Root.md); `Select`: *typeof* [`Select`](../functions/Select.md); `Week`: *typeof* [`Week`](../functions/Week.md); `Weekday`: *typeof* [`Weekday`](../functions/Weekday.md); `Weekdays`: *typeof* [`Weekdays`](../functions/Weekdays.md); `WeekNumber`: *typeof* [`WeekNumber`](../functions/WeekNumber.md); `WeekNumberHeader`: *typeof* [`WeekNumberHeader`](../functions/WeekNumberHeader.md); `Weeks`: *typeof* [`Weeks`](../functions/Weeks.md); `YearsDropdown`: *typeof* [`YearsDropdown`](../functions/YearsDropdown.md); \}

Defined in: [src/types/shared.ts:45](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L45)

The components that can be customized using the `components` prop.

## See

https://daypicker.dev/guides/custom-components

## Properties

### ~~Button~~

> **Button**: *typeof* `components.Button`

Defined in: [src/types/shared.ts:52](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L52)

Render any button element in DayPicker.

#### Deprecated

Use [CustomComponents.NextMonthButton](#nextmonthbutton) or
  [CustomComponents.PreviousMonthButton](#previousmonthbutton) instead.

***

### CaptionLabel

> **CaptionLabel**: *typeof* [`CaptionLabel`](../functions/CaptionLabel.md)

Defined in: [src/types/shared.ts:56](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L56)

Render the caption label of the month grid.

***

### Chevron

> **Chevron**: *typeof* [`Chevron`](../functions/Chevron.md)

Defined in: [src/types/shared.ts:54](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L54)

Render the chevron icon used in the navigation buttons and dropdowns.

***

### Day

> **Day**: *typeof* [`Day`](../functions/Day.md)

Defined in: [src/types/shared.ts:58](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L58)

Render the day cell in the month grid.

***

### DayButton

> **DayButton**: *typeof* [`DayButton`](../functions/DayButton.md)

Defined in: [src/types/shared.ts:60](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L60)

Render the button containing the day in the day cell.

***

### Dropdown

> **Dropdown**: *typeof* [`Dropdown`](../functions/Dropdown.md)

Defined in: [src/types/shared.ts:62](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L62)

Render the dropdown element to select years and months.

***

### DropdownNav

> **DropdownNav**: *typeof* [`DropdownNav`](../functions/DropdownNav.md)

Defined in: [src/types/shared.ts:64](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L64)

Render the container of the dropdowns.

***

### Footer

> **Footer**: *typeof* [`Footer`](../functions/Footer.md)

Defined in: [src/types/shared.ts:66](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L66)

Render the footer element announced by screen readers.

***

### Month

> **Month**: *typeof* [`Month`](../functions/Month.md)

Defined in: [src/types/shared.ts:68](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L68)

Render the container of the MonthGrid.

***

### MonthCaption

> **MonthCaption**: *typeof* [`MonthCaption`](../functions/MonthCaption.md)

Defined in: [src/types/shared.ts:70](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L70)

Render the caption of the month grid.

***

### MonthGrid

> **MonthGrid**: *typeof* [`MonthGrid`](../functions/MonthGrid.md)

Defined in: [src/types/shared.ts:72](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L72)

Render the grid of days in a month.

***

### Months

> **Months**: *typeof* [`Months`](../functions/Months.md)

Defined in: [src/types/shared.ts:74](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L74)

Wrapper of the month grids.

***

### MonthsDropdown

> **MonthsDropdown**: *typeof* [`MonthsDropdown`](../functions/MonthsDropdown.md)

Defined in: [src/types/shared.ts:100](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L100)

Render the dropdown for selecting months.

***

### Nav

> **Nav**: *typeof* [`Nav`](../functions/Nav.md)

Defined in: [src/types/shared.ts:76](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L76)

Render the navigation element with the next and previous buttons.

***

### NextMonthButton

> **NextMonthButton**: *typeof* [`NextMonthButton`](../functions/NextMonthButton.md)

Defined in: [src/types/shared.ts:82](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L82)

Render the next month button element in the navigation.

***

### Option

> **Option**: *typeof* [`Option`](../functions/Option.md)

Defined in: [src/types/shared.ts:78](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L78)

Render the `<option>` HTML element in the dropdown.

***

### PreviousMonthButton

> **PreviousMonthButton**: *typeof* [`PreviousMonthButton`](../functions/PreviousMonthButton.md)

Defined in: [src/types/shared.ts:80](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L80)

Render the previous month button element in the navigation.

***

### Root

> **Root**: *typeof* [`Root`](../functions/Root.md)

Defined in: [src/types/shared.ts:84](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L84)

Render the root element of the calendar.

***

### Select

> **Select**: *typeof* [`Select`](../functions/Select.md)

Defined in: [src/types/shared.ts:86](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L86)

Render the select element in the dropdowns.

***

### Week

> **Week**: *typeof* [`Week`](../functions/Week.md)

Defined in: [src/types/shared.ts:90](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L90)

Render the week rows.

***

### Weekday

> **Weekday**: *typeof* [`Weekday`](../functions/Weekday.md)

Defined in: [src/types/shared.ts:92](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L92)

Render the weekday name in the header.

***

### Weekdays

> **Weekdays**: *typeof* [`Weekdays`](../functions/Weekdays.md)

Defined in: [src/types/shared.ts:94](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L94)

Render the row containing the week days.

***

### WeekNumber

> **WeekNumber**: *typeof* [`WeekNumber`](../functions/WeekNumber.md)

Defined in: [src/types/shared.ts:96](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L96)

Render the cell with the number of the week.

***

### WeekNumberHeader

> **WeekNumberHeader**: *typeof* [`WeekNumberHeader`](../functions/WeekNumberHeader.md)

Defined in: [src/types/shared.ts:98](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L98)

Render the header of the week number column.

***

### Weeks

> **Weeks**: *typeof* [`Weeks`](../functions/Weeks.md)

Defined in: [src/types/shared.ts:88](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L88)

Render the weeks section in the month grid.

***

### YearsDropdown

> **YearsDropdown**: *typeof* [`YearsDropdown`](../functions/YearsDropdown.md)

Defined in: [src/types/shared.ts:102](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L102)

Render the dropdown for selecting years.
