# Interface: DayPickerCalendar

The calendar displayed in DayPicker.

## Properties

### dates

> **dates**: `Date`[]

All the unique dates displayed to the calendar.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:9](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L9)

***

### days

> **days**: [`CalendarDay`](/api/classes/CalendarDay.md)[]

All the days displayed in the calendar. As opposite from
[DayPickerCalendar.dates](/api/interfaces/DayPickerCalendar.md#dates), it may return duplicated dates when shown
outside the month.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:15](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L15)

***

### dropdown

> **dropdown**: `Object`

The options to use in the years or months dropdowns.

#### Type declaration

##### months

> **months**: `undefined` \| [`DropdownOption`](/api/type-aliases/DropdownOption.md)[]

The options to use in the months dropdown.

##### years

> **years**: `undefined` \| [`DropdownOption`](/api/type-aliases/DropdownOption.md)[]

The options to use in the years dropdown.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:47](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L47)

***

### firstMonth

> **firstMonth**: `Date`

The month displayed as first the calendar. When
[DayPickerProps.numberOfMonths](/api/interfaces/PropsBase.md#numberofmonths) is greater than `1`, it is the first
of the displayed months.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:29](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L29)

***

### goToDay

> **goToDay**: (`day`) => `void`

Navigate to the specified date. If the second parameter (refDate) is
provided and the date is before the refDate, then the month is set to one
month before the date.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `day` | [`CalendarDay`](/api/classes/CalendarDay.md) | The date to navigate to. |

#### Returns

`void`

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:79](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L79)

***

### goToMonth

> **goToMonth**: (`month`) => `void`

Navigate to the specified month. Will fire the
[DayPickerProps.onMonthChange](/api/interfaces/PropsBase.md#onmonthchange) callback.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `month` | `Date` |

#### Returns

`void`

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:61](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L61)

***

### goToNextMonth

> **goToNextMonth**: () => `void`

Navigate to the next month.

#### Returns

`void`

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:65](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L65)

***

### goToPreviousMonth

> **goToPreviousMonth**: () => `void`

Navigate to the previous month.

#### Returns

`void`

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:69](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L69)

***

### isDayDisplayed

> **isDayDisplayed**: (`day`) => `boolean`

Whether the given date is included in the displayed months.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `day` | [`CalendarDay`](/api/classes/CalendarDay.md) |

#### Returns

`boolean`

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:83](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L83)

***

### lastMonth

> **lastMonth**: `Date`

The month displayed as last the calendar. When
[DayPickerProps.numberOfMonths](/api/interfaces/PropsBase.md#numberofmonths) is greater than `1`, it is the last
of the displayed months.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:35](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L35)

***

### months

> **months**: [`Month`](/api/classes/Month.md)[]

The months displayed in the calendar.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:23](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L23)

***

### nextMonth

> **nextMonth**: `undefined` \| `Date`

The next month to display.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:39](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L39)

***

### previousMonth

> **previousMonth**: `undefined` \| `Date`

The previous month to display.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:43](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L43)

***

### weeks

> **weeks**: [`Week`](/api/classes/Week.md)[]

The months displayed in the calendar.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/CalendarContext/DayPickerCalendar.ts:19](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/CalendarContext/DayPickerCalendar.ts#L19)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
