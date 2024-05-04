# API Reference v8.10.1

## Enumerations

| Enumeration | Description |
| :------ | :------ |
| [InternalModifier](enumerations/InternalModifier.md) | The name of the modifiers that are used internally by DayPicker. |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [CaptionLabelProps](interfaces/CaptionLabelProps.md) | The props for the [CaptionLabel](functions/CaptionLabel.md) component. |
| [CaptionProps](interfaces/CaptionProps.md) | Represent the props of the [Caption](functions/Caption.md) component. |
| [CustomComponents](interfaces/CustomComponents.md) | Map of the components that can be changed using the `components` prop. |
| [DayContentProps](interfaces/DayContentProps.md) | Represent the props for the [DayContent](functions/DayContent.md) component. |
| [DayPickerBase](interfaces/DayPickerBase.md) | The base props for the [DayPicker](functions/DayPicker.md) component and the |
| [DayPickerContextValue](interfaces/DayPickerContextValue.md) | The value of the [DayPickerContext](variables/DayPickerContext.md) extends the props from DayPicker |
| [DayPickerDefaultProps](interfaces/DayPickerDefaultProps.md) | The props for the [DayPicker](functions/DayPicker.md) component when using `mode="default"` or |
| [DayPickerMultipleProps](interfaces/DayPickerMultipleProps.md) | The props for the [DayPicker](functions/DayPicker.md) component when using `mode="multiple"`. |
| [DayPickerProviderProps](interfaces/DayPickerProviderProps.md) | The props for the [DayPickerProvider](functions/DayPickerProvider.md). |
| [DayPickerRangeProps](interfaces/DayPickerRangeProps.md) | The props for the [DayPicker](functions/DayPicker.md) component when using `mode="range"`. |
| [DayPickerSingleProps](interfaces/DayPickerSingleProps.md) | The props for the [DayPicker](functions/DayPicker.md) component when using `mode="single"`. |
| [DayProps](interfaces/DayProps.md) | Represent the props used by the [Day](functions/Day.md) component. |
| [DropdownProps](interfaces/DropdownProps.md) | The props for the [Dropdown](functions/Dropdown.md) component. |
| [FooterProps](interfaces/FooterProps.md) | - |
| [NavigationContextValue](interfaces/NavigationContextValue.md) | Represents the value of the [NavigationContext](variables/NavigationContext.md). |
| [RowProps](interfaces/RowProps.md) | The props for the [Row](functions/Row.md) component. |
| [SelectMultipleContextValue](interfaces/SelectMultipleContextValue.md) | Represents the value of a [SelectMultipleContext](variables/SelectMultipleContext.md). |
| [SelectRangeContextValue](interfaces/SelectRangeContextValue.md) | Represents the value of a [SelectRangeContext](variables/SelectRangeContext.md). |
| [SelectRangeProviderProps](interfaces/SelectRangeProviderProps.md) | - |
| [SelectSingleContextValue](interfaces/SelectSingleContextValue.md) | Represents the value of a [SelectSingleContext](variables/SelectSingleContext.md). |
| [SelectSingleProviderProps](interfaces/SelectSingleProviderProps.md) | - |
| [UseInputOptions](interfaces/UseInputOptions.md) | - |
| [UseInputValue](interfaces/UseInputValue.md) | Represent the value returned by [useInput](functions/useInput.md). |
| [WeekNumberProps](interfaces/WeekNumberProps.md) | The props for the [WeekNumber](functions/WeekNumber.md) component. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [ActiveModifiers](type-aliases/ActiveModifiers.md) | The modifiers that are matching a day in the calendar. Use the |
| [ButtonProps](type-aliases/ButtonProps.md) | The props for the [Button](functions/Button.md) component. |
| [CaptionLayout](type-aliases/CaptionLayout.md) | The layout of the caption: |
| [ClassNames](type-aliases/ClassNames.md) | The class names of each element. |
| [CustomModifiers](type-aliases/CustomModifiers.md) | A map of matchers used as custom modifiers by DayPicker component. This is |
| [DateAfter](type-aliases/DateAfter.md) | A matcher to match a day falling after the specified date, with the date not |
| [DateBefore](type-aliases/DateBefore.md) | A matcher to match a day falling before the specified date, with the date not |
| [DateFormatter](type-aliases/DateFormatter.md) | - |
| [DateInterval](type-aliases/DateInterval.md) | A matcher to match a day falling before and/or after two dates, where the |
| [DateRange](type-aliases/DateRange.md) | A matcher to match a range of dates. The range can be open. Differently from |
| [DayClickEventHandler](type-aliases/DayClickEventHandler.md) | - |
| [DayFocusEventHandler](type-aliases/DayFocusEventHandler.md) | - |
| [DayKeyboardEventHandler](type-aliases/DayKeyboardEventHandler.md) | - |
| [DayLabel](type-aliases/DayLabel.md) | - |
| [DayModifiers](type-aliases/DayModifiers.md) | The custom modifiers passed to the [DayPickerBase.modifiers](interfaces/DayPickerBase.md#modifiers). |
| [DayMouseEventHandler](type-aliases/DayMouseEventHandler.md) | - |
| [DayOfWeek](type-aliases/DayOfWeek.md) | A matcher to match a date being one of the specified days of the week (`0-6`, |
| [DayPickerProps](type-aliases/DayPickerProps.md) | - |
| [DayPointerEventHandler](type-aliases/DayPointerEventHandler.md) | - |
| [DayRender](type-aliases/DayRender.md) | - |
| [DaySelectionMode](type-aliases/DaySelectionMode.md) | Selection modes supported by DayPicker. |
| [DayTouchEventHandler](type-aliases/DayTouchEventHandler.md) | - |
| [FocusContextValue](type-aliases/FocusContextValue.md) | Represents the value of the [FocusContext](variables/FocusContext.md). |
| [FocusProviderProps](type-aliases/FocusProviderProps.md) | - |
| [Formatters](type-aliases/Formatters.md) | Represent a map of formatters used to render localized content. |
| [InputDayPickerProps](type-aliases/InputDayPickerProps.md) | The props to attach to the DayPicker component when using [useInput](functions/useInput.md). |
| [InputProps](type-aliases/InputProps.md) | The props to attach to the input field when using [useInput](functions/useInput.md). |
| [InternalModifiers](type-aliases/InternalModifiers.md) | Map of matchers used for the internal modifiers. |
| [InternalModifiersElement](type-aliases/InternalModifiersElement.md) | These elements must not be in the `styles` or `classNames` records as they |
| [Labels](type-aliases/Labels.md) | Map of functions to translate ARIA labels for the relative elements. |
| [Matcher](type-aliases/Matcher.md) | A value or a function that matches a specific day. |
| [Modifier](type-aliases/Modifier.md) | A _modifier_ represents different styles or states of a day displayed in the |
| [Modifiers](type-aliases/Modifiers.md) | The modifiers used by DayPicker. |
| [ModifiersClassNames](type-aliases/ModifiersClassNames.md) | The classnames to assign to each day element matching a modifier. |
| [ModifiersStyles](type-aliases/ModifiersStyles.md) | The style to apply to each day element matching a modifier. |
| [MonthChangeEventHandler](type-aliases/MonthChangeEventHandler.md) | - |
| [MonthsProps](type-aliases/MonthsProps.md) | The props for the [Months](functions/Months.md) component. |
| [NavButtonLabel](type-aliases/NavButtonLabel.md) | - |
| [RootContext](type-aliases/RootContext.md) | The props of [RootProvider](functions/RootProvider.md). |
| [SelectMultipleEventHandler](type-aliases/SelectMultipleEventHandler.md) | - |
| [SelectMultipleModifiers](type-aliases/SelectMultipleModifiers.md) | Represent the modifiers that are changed by the multiple selection. |
| [SelectMultipleProviderProps](type-aliases/SelectMultipleProviderProps.md) | - |
| [SelectRangeEventHandler](type-aliases/SelectRangeEventHandler.md) | - |
| [SelectRangeModifiers](type-aliases/SelectRangeModifiers.md) | Represent the modifiers that are changed by the range selection. |
| [SelectSingleEventHandler](type-aliases/SelectSingleEventHandler.md) | - |
| [StyledComponent](type-aliases/StyledComponent.md) | Props of a component that can be styled via classNames or inline-styles. |
| [StyledElement](type-aliases/StyledElement.md) | The style (either via class names or via in-line styles) of an element. |
| [Styles](type-aliases/Styles.md) | The inline-styles of each styled element, to use with the `styles` prop. Day |
| [WeekNumberClickEventHandler](type-aliases/WeekNumberClickEventHandler.md) | - |
| [WeekNumberFormatter](type-aliases/WeekNumberFormatter.md) | - |
| [WeekNumberLabel](type-aliases/WeekNumberLabel.md) | - |
| [WeekdayLabel](type-aliases/WeekdayLabel.md) | - |

## Variables

| Variable | Description |
| :------ | :------ |
| [DayPickerContext](variables/DayPickerContext.md) | The DayPicker context shares the props passed to DayPicker within internal |
| [FocusContext](variables/FocusContext.md) | The Focus context shares details about the focused day for the keyboard |
| [NavigationContext](variables/NavigationContext.md) | The Navigation context shares details and methods to navigate the months in |
| [SelectMultipleContext](variables/SelectMultipleContext.md) | The SelectMultiple context shares details about the selected days when in |
| [SelectRangeContext](variables/SelectRangeContext.md) | The SelectRange context shares details about the selected days when in range |
| [SelectSingleContext](variables/SelectSingleContext.md) | The SelectSingle context shares details about the selected days when in |

## Functions

| Function | Description |
| :------ | :------ |
| [Button](functions/Button.md) | Render a button HTML element applying the reset class name. |
| [Caption](functions/Caption.md) | Render the caption of a month. The caption has a different layout when |
| [CaptionDropdowns](functions/CaptionDropdowns.md) | Render a caption with the dropdowns to navigate between months and years. |
| [CaptionLabel](functions/CaptionLabel.md) | Render the caption for the displayed month. This component is used when |
| [CaptionNavigation](functions/CaptionNavigation.md) | Render a caption with a button-based navigation. |
| [Day](functions/Day.md) | The content of a day cell – as a button or span element according to its |
| [DayContent](functions/DayContent.md) | Render the content of the day cell. |
| [DayPicker](functions/DayPicker.md) | DayPicker render a date picker component to let users pick dates from a |
| [DayPickerProvider](functions/DayPickerProvider.md) | The provider for the [DayPickerContext](variables/DayPickerContext.md), assigning the defaults from the |
| [Dropdown](functions/Dropdown.md) | Render a styled select component – displaying a caption and a custom |
| [FocusProvider](functions/FocusProvider.md) | The provider for the [FocusContext](variables/FocusContext.md). |
| [Footer](functions/Footer.md) | Render the Footer component (empty as default). |
| [Head](functions/Head.md) | Render the table head. |
| [HeadRow](functions/HeadRow.md) | Render the HeadRow component - i.e. the table head row with the weekday |
| [IconDropdown](functions/IconDropdown.md) | Render the icon in the styled drop-down. |
| [IconLeft](functions/IconLeft.md) | Render the "previous month" button in the navigation. |
| [IconRight](functions/IconRight.md) | Render the "next month" button in the navigation. |
| [Months](functions/Months.md) | Render the wrapper for the month grids. |
| [NavigationProvider](functions/NavigationProvider.md) | Provides the values for the [NavigationContext](variables/NavigationContext.md). |
| [RootProvider](functions/RootProvider.md) | Provide the value for all the context providers. |
| [Row](functions/Row.md) | Render a row in the calendar, with the days and the week number. |
| [SelectMultipleProvider](functions/SelectMultipleProvider.md) | Provides the values for the [SelectMultipleContext](variables/SelectMultipleContext.md). |
| [SelectMultipleProviderInternal](functions/SelectMultipleProviderInternal.md) | - |
| [SelectRangeProvider](functions/SelectRangeProvider.md) | Provides the values for the [SelectRangeProvider](functions/SelectRangeProvider.md). |
| [SelectRangeProviderInternal](functions/SelectRangeProviderInternal.md) | - |
| [SelectSingleProvider](functions/SelectSingleProvider.md) | Provides the values for the [SelectSingleProvider](functions/SelectSingleProvider.md). |
| [SelectSingleProviderInternal](functions/SelectSingleProviderInternal.md) | - |
| [WeekNumber](functions/WeekNumber.md) | Render the week number element. If `onWeekNumberClick` is passed to |
| [addToRange](functions/addToRange.md) | Add a day to an existing range. |
| [isDateAfterType](functions/isDateAfterType.md) | Returns true if `value` is of type [DateAfter](type-aliases/DateAfter.md). |
| [isDateBeforeType](functions/isDateBeforeType.md) | Returns true if `value` is of type [DateBefore](type-aliases/DateBefore.md). |
| [isDateInterval](functions/isDateInterval.md) | Returns true if `matcher` is of type [DateInterval](type-aliases/DateInterval.md). |
| [isDateRange](functions/isDateRange.md) | Returns true if `value` is a [DateRange](type-aliases/DateRange.md) type. |
| [isDayOfWeekType](functions/isDayOfWeekType.md) | Returns true if `value` is a [DayOfWeek](type-aliases/DayOfWeek.md) type. |
| [isDayPickerDefault](functions/isDayPickerDefault.md) | Returns true when the props are of type [DayPickerDefaultProps](interfaces/DayPickerDefaultProps.md). |
| [isDayPickerMultiple](functions/isDayPickerMultiple.md) | Returns true when the props are of type [DayPickerMultipleProps](interfaces/DayPickerMultipleProps.md). |
| [isDayPickerRange](functions/isDayPickerRange.md) | Returns true when the props are of type [DayPickerRangeProps](interfaces/DayPickerRangeProps.md). |
| [isDayPickerSingle](functions/isDayPickerSingle.md) | Returns true when the props are of type [DayPickerSingleProps](interfaces/DayPickerSingleProps.md). |
| [isMatch](functions/isMatch.md) | Returns whether a day matches against at least one of the given Matchers. |
| [useActiveModifiers](functions/useActiveModifiers.md) | Return the active modifiers for the specified day. |
| [useDayPicker](functions/useDayPicker.md) | Hook to access the [DayPickerContextValue](interfaces/DayPickerContextValue.md). |
| [useDayRender](functions/useDayRender.md) | Return props and data used to render the [Day](functions/Day.md) component. |
| [useFocusContext](functions/useFocusContext.md) | Hook to access the [FocusContextValue](type-aliases/FocusContextValue.md). Use this hook to handle the |
| [useInput](functions/useInput.md) | Return props and setters for binding an input field to DayPicker. |
| [useNavigation](functions/useNavigation.md) | Hook to access the [NavigationContextValue](interfaces/NavigationContextValue.md). Use this hook to navigate |
| [useSelectMultiple](functions/useSelectMultiple.md) | Hook to access the [SelectMultipleContextValue](interfaces/SelectMultipleContextValue.md). |
| [useSelectRange](functions/useSelectRange.md) | Hook to access the [SelectRangeContextValue](interfaces/SelectRangeContextValue.md). |
| [useSelectSingle](functions/useSelectSingle.md) | Hook to access the [SelectSingleContextValue](interfaces/SelectSingleContextValue.md). |
