# API v9.13.0

## DayPicker

| Name | Description |
| ------ | ------ |
| [DayPicker](functions/DayPicker.md) | Renders the DayPicker calendar component. |
| [DayPickerProps](type-aliases/DayPickerProps.md) | The props for the `<DayPicker />` component. |
| [PropsBase](interfaces/PropsBase.md) | Props for customizing the calendar, handling localization, and managing events. These exclude the selection mode props. |
| [PropsMulti](interfaces/PropsMulti.md) | The props when the multiple selection is optional. |
| [PropsMultiRequired](interfaces/PropsMultiRequired.md) | The props when the multiple selection is required. |
| [PropsRange](interfaces/PropsRange.md) | The props when the range selection is optional. |
| [PropsRangeRequired](interfaces/PropsRangeRequired.md) | The props when the range selection is required. |
| [PropsSingle](interfaces/PropsSingle.md) | The props when the single selection is optional. |
| [PropsSingleRequired](interfaces/PropsSingleRequired.md) | The props when the single selection is required. |

## Classes

| Class | Description |
| ------ | ------ |
| [CalendarDay](classes/CalendarDay.md) | Represents a day displayed in the calendar. |
| [CalendarMonth](classes/CalendarMonth.md) | Represents a month in a calendar year. |
| [CalendarWeek](classes/CalendarWeek.md) | Represents a week in a calendar month. |
| [DateLib](classes/DateLib.md) | A wrapper class around [date-fns](http://date-fns.org) that provides utility methods for date manipulation and formatting. |

## Components

| Function | Description |
| ------ | ------ |
| [CaptionLabel](functions/CaptionLabel.md) | Render the label in the month caption. |
| [Chevron](functions/Chevron.md) | Render the chevron icon used in the navigation buttons and dropdowns. |
| [Day](functions/Day.md) | Render a grid cell for a specific day in the calendar. |
| [DayButton](functions/DayButton.md) | Render a button for a specific day in the calendar. |
| [Dropdown](functions/Dropdown.md) | Render a dropdown component for navigation in the calendar. |
| [DropdownNav](functions/DropdownNav.md) | Render the navigation dropdowns for the calendar. |
| [Footer](functions/Footer.md) | Render the footer of the calendar. |
| [Month](functions/Month.md) | Render the grid with the weekday header row and the weeks for a specific month. |
| [MonthCaption](functions/MonthCaption.md) | Render the caption for a month in the calendar. |
| [MonthGrid](functions/MonthGrid.md) | Render the grid of days for a specific month. |
| [Months](functions/Months.md) | Render a container wrapping the month grids. |
| [MonthsDropdown](functions/MonthsDropdown.md) | Render a dropdown to navigate between months in the calendar. |
| [Nav](functions/Nav.md) | Render the navigation toolbar with buttons to navigate between months. |
| [NextMonthButton](functions/NextMonthButton.md) | Render the button to navigate to the next month in the calendar. |
| [Option](functions/Option.md) | Render an `option` element. |
| [PreviousMonthButton](functions/PreviousMonthButton.md) | Render the button to navigate to the previous month in the calendar. |
| [Root](functions/Root.md) | Render the root element of the calendar. |
| [Select](functions/Select.md) | Render a `select` element. |
| [Week](functions/Week.md) | Render a table row representing a week in the calendar. |
| [Weekday](functions/Weekday.md) | Render a table header cell with the name of a weekday (e.g., "Mo", "Tu"). |
| [Weekdays](functions/Weekdays.md) | Render the table row containing the weekday names. |
| [WeekNumber](functions/WeekNumber.md) | Render a table cell displaying the number of the week. |
| [WeekNumberHeader](functions/WeekNumberHeader.md) | Render the header cell for the week numbers column. |
| [Weeks](functions/Weeks.md) | Render the container for the weeks in the month grid. |
| [YearsDropdown](functions/YearsDropdown.md) | Render a dropdown to navigate between years in the calendar. |

## Formatters

| Function | Description |
| ------ | ------ |
| [formatCaption](functions/formatCaption.md) | Formats the caption of the month. |
| [formatDay](functions/formatDay.md) | Formats the day date shown in the day cell. |
| [formatMonthDropdown](functions/formatMonthDropdown.md) | Formats the month for the dropdown option label. |
| [formatWeekdayName](functions/formatWeekdayName.md) | Formats the name of a weekday to be displayed in the weekdays header. |
| [formatWeekNumber](functions/formatWeekNumber.md) | Formats the week number. |
| [formatWeekNumberHeader](functions/formatWeekNumberHeader.md) | Formats the header for the week number column. |
| [formatYearDropdown](functions/formatYearDropdown.md) | Formats the year for the dropdown option label. |

## Labels

| Function | Description |
| ------ | ------ |
| [labelDayButton](functions/labelDayButton.md) | Generates the ARIA label for a day button. |
| [labelGrid](functions/labelGrid.md) | Generates the ARIA label for the month grid, which is announced when entering the grid. |
| [labelGridcell](functions/labelGridcell.md) | Generates the label for a day grid cell when the calendar is not interactive. |
| [labelMonthDropdown](functions/labelMonthDropdown.md) | Generates the ARIA label for the months dropdown. |
| [labelNav](functions/labelNav.md) | Generates the ARIA label for the navigation toolbar. |
| [labelNext](functions/labelNext.md) | Generates the ARIA label for the "next month" button. |
| [labelPrevious](functions/labelPrevious.md) | Generates the ARIA label for the "previous month" button. |
| [labelWeekday](functions/labelWeekday.md) | Generates the ARIA label for a weekday column header. |
| [labelWeekNumber](functions/labelWeekNumber.md) | Generates the ARIA label for the week number cell (the first cell in a row). |
| [labelWeekNumberHeader](functions/labelWeekNumberHeader.md) | Generates the ARIA label for the week number header element. |
| [labelYearDropdown](functions/labelYearDropdown.md) | Generates the ARIA label for the years dropdown. |

## Utilities

| Function | Description |
| ------ | ------ |
| [addToRange](functions/addToRange.md) | Adds a date to an existing range, considering constraints like minimum and maximum range size. |
| [dateMatchModifiers](functions/dateMatchModifiers.md) | Checks if a given date matches at least one of the specified [Matcher](type-aliases/Matcher.md). |
| [getDefaultClassNames](functions/getDefaultClassNames.md) | Returns the default class names for the UI elements. |
| [isDateAfterType](functions/isDateAfterType.md) | Checks if the given value is of type [DateAfter](type-aliases/DateAfter.md). |
| [isDateBeforeType](functions/isDateBeforeType.md) | Checks if the given value is of type [DateBefore](type-aliases/DateBefore.md). |
| [isDateInterval](functions/isDateInterval.md) | Checks if the given value is of type [DateInterval](type-aliases/DateInterval.md). |
| [isDateRange](functions/isDateRange.md) | Checks if the given value is of type [DateRange](type-aliases/DateRange.md). |
| [isDayOfWeekType](functions/isDayOfWeekType.md) | Checks if the given value is of type [DayOfWeek](type-aliases/DayOfWeek.md). |
| [rangeContainsDayOfWeek](functions/rangeContainsDayOfWeek.md) | Checks if a date range contains one or more specified days of the week. |
| [rangeContainsModifiers](functions/rangeContainsModifiers.md) | Checks if a date range contains dates that match the given modifiers. |
| [rangeIncludesDate](functions/rangeIncludesDate.md) | Checks if a given date is within a specified date range. |
| [rangeOverlaps](functions/rangeOverlaps.md) | Determines if two date ranges overlap. |

## Hooks

| Function | Description |
| ------ | ------ |
| [useDayPicker](functions/useDayPicker.md) | Provides access to the DayPicker context, which includes properties and methods to interact with the DayPicker component. This hook must be used within a custom component. |

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [Animation](enumerations/Animation.md) | Enum representing different animation states for transitioning between months. |
| [DayFlag](enumerations/DayFlag.md) | Enum representing flags for the [UI.Day](enumerations/UI.md) element. |
| [SelectionState](enumerations/SelectionState.md) | Enum representing selection states that can be applied to the [UI.Day](enumerations/UI.md) element in selection mode. |
| [UI](enumerations/UI.md) | Enum representing the UI elements composing DayPicker. These elements are mapped to [CustomComponents](type-aliases/CustomComponents.md), [ClassNames](type-aliases/ClassNames.md), and [Styles](type-aliases/Styles.md). |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [DateLibOptions](interfaces/DateLibOptions.md) | The options for the `DateLib` class. |
| [DayPickerLocale](interfaces/DayPickerLocale.md) | Locale type used by DayPicker. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ButtonProps](type-aliases/ButtonProps.md) | - |
| [CaptionLabelProps](type-aliases/CaptionLabelProps.md) | - |
| [ChevronProps](type-aliases/ChevronProps.md) | - |
| [ClassNames](type-aliases/ClassNames.md) | The CSS classnames to use for the [UI](enumerations/UI.md) elements, the [SelectionState](enumerations/SelectionState.md) and the [DayFlag](enumerations/DayFlag.md). |
| [CustomComponents](type-aliases/CustomComponents.md) | The components that can be customized using the `components` prop. |
| [DateAfter](type-aliases/DateAfter.md) | Match a day falling after the specified date (exclusive). |
| [DateBefore](type-aliases/DateBefore.md) | Match a day falling before the specified date (exclusive). |
| [DateInterval](type-aliases/DateInterval.md) | An interval of dates. Unlike [DateRange](type-aliases/DateRange.md), the range ends are not included. |
| [DateRange](type-aliases/DateRange.md) | A range of dates. Unlike [DateInterval](type-aliases/DateInterval.md), the range ends are included. |
| [DayButtonProps](type-aliases/DayButtonProps.md) | - |
| [DayEventHandler](type-aliases/DayEventHandler.md) | The event handler triggered when clicking or interacting with a day. |
| [DayOfWeek](type-aliases/DayOfWeek.md) | Match days of the week (`0-6`, where `0` is Sunday). |
| [DayPickerContext](type-aliases/DayPickerContext.md) | Represents the context for the DayPicker component, providing various properties and methods to interact with the calendar. |
| [DayPickerLocaleLabels](type-aliases/DayPickerLocaleLabels.md) | Translations for DayPicker-specific labels. |
| [DayProps](type-aliases/DayProps.md) | - |
| [~~DeprecatedUI~~](type-aliases/DeprecatedUI.md) | Deprecated UI elements and flags from previous versions of DayPicker. |
| [DropdownNavProps](type-aliases/DropdownNavProps.md) | - |
| [DropdownOption](type-aliases/DropdownOption.md) | An option to use in the dropdown. Maps to the `<option>` HTML element. |
| [DropdownProps](type-aliases/DropdownProps.md) | - |
| [FooterProps](type-aliases/FooterProps.md) | - |
| [Formatters](type-aliases/Formatters.md) | Represents a map of formatters used to render localized content. |
| [Labels](type-aliases/Labels.md) | A map of functions to translate ARIA labels for various elements. |
| [Locale](type-aliases/Locale.md) | - |
| [Matcher](type-aliases/Matcher.md) | A value or a function that matches specific days. |
| [Mode](type-aliases/Mode.md) | Selection modes supported by DayPicker. |
| [Modifiers](type-aliases/Modifiers.md) | Represents the modifiers that match a specific day in the calendar. |
| [ModifiersClassNames](type-aliases/ModifiersClassNames.md) | The classnames to assign to each day element matching a modifier. |
| [ModifiersStyles](type-aliases/ModifiersStyles.md) | The style to apply to each day element matching a modifier. |
| [MonthCaptionProps](type-aliases/MonthCaptionProps.md) | - |
| [MonthChangeEventHandler](type-aliases/MonthChangeEventHandler.md) | The event handler when a month is changed in the calendar. |
| [MonthGridProps](type-aliases/MonthGridProps.md) | - |
| [MonthProps](type-aliases/MonthProps.md) | - |
| [MonthsProps](type-aliases/MonthsProps.md) | - |
| [MonthYearOrder](type-aliases/MonthYearOrder.md) | Indicates the preferred ordering of month and year for localized labels. |
| [MoveFocusBy](type-aliases/MoveFocusBy.md) | The temporal unit to move the focus by. |
| [MoveFocusDir](type-aliases/MoveFocusDir.md) | The direction to move the focus relative to the current focused date. |
| [NavProps](type-aliases/NavProps.md) | - |
| [NextMonthButtonProps](type-aliases/NextMonthButtonProps.md) | - |
| [Numerals](type-aliases/Numerals.md) | The numbering system supported by DayPicker. |
| [OnSelectHandler](type-aliases/OnSelectHandler.md) | Shared handler type for `onSelect` callback when a selection mode is set. |
| [OptionProps](type-aliases/OptionProps.md) | - |
| [PreviousMonthButtonProps](type-aliases/PreviousMonthButtonProps.md) | - |
| [RootProps](type-aliases/RootProps.md) | - |
| [SelectedMulti](type-aliases/SelectedMulti.md) | - |
| [SelectedRange](type-aliases/SelectedRange.md) | - |
| [SelectedSingle](type-aliases/SelectedSingle.md) | - |
| [SelectedValue](type-aliases/SelectedValue.md) | Represents the selected value based on the selection mode. |
| [SelectHandler](type-aliases/SelectHandler.md) | The handler to set a selection based on the mode. |
| [SelectHandlerMulti](type-aliases/SelectHandlerMulti.md) | - |
| [SelectHandlerRange](type-aliases/SelectHandlerRange.md) | - |
| [SelectHandlerSingle](type-aliases/SelectHandlerSingle.md) | - |
| [Selection](type-aliases/Selection.md) | - |
| [SelectProps](type-aliases/SelectProps.md) | - |
| [Styles](type-aliases/Styles.md) | The CSS styles to use for the [UI](enumerations/UI.md) elements, the [SelectionState](enumerations/SelectionState.md) and the [DayFlag](enumerations/DayFlag.md). |
| [WeekdayProps](type-aliases/WeekdayProps.md) | - |
| [WeekdaysProps](type-aliases/WeekdaysProps.md) | - |
| [WeekNumberHeaderProps](type-aliases/WeekNumberHeaderProps.md) | - |
| [WeekNumberProps](type-aliases/WeekNumberProps.md) | - |
| [WeekProps](type-aliases/WeekProps.md) | - |
| [WeeksProps](type-aliases/WeeksProps.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [defaultDateLib](variables/defaultDateLib.md) | The default date library with English locale. |
| [defaultLocale](variables/defaultLocale.md) | English (United States) locale extended with DayPicker-specific translations. |
