---
id: "daypickercontextvalue"
title: "Interface: DayPickerContextValue"
sidebar_label: "DayPickerContextValue"
custom_edit_url: null
hide_title: true
---

# Interface: DayPickerContextValue

Represent the value of the `DayPickerContext`.

## Properties

### captionLayout

• **captionLayout**: [*CaptionLayout*](../types/captionlayout.md)

___

### classNames

• **classNames**: *Required*<Partial<[*StyledElement*](../types/styledelement.md)<string\>\>\>

___

### components

• **components**: [*Components*](components.md)

___

### defaultMonth

• `Optional` **defaultMonth**: *undefined* \| Date

___

### defaultSelected

• `Optional` **defaultSelected**: *undefined* \| Date \| Date[] \| [*DateAfter*](../types/dateafter.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DateRange*](../types/daterange.md) \| [*DayOfWeekMatcher*](../types/dayofweekmatcher.md) \| (`date`: Date) => *boolean*

___

### dir

• `Optional` **dir**: *undefined* \| *string*

___

### disableNavigation

• `Optional` **disableNavigation**: *undefined* \| *boolean*

___

### fixedWeeks

• `Optional` **fixedWeeks**: *undefined* \| *boolean*

___

### footer

• `Optional` **footer**: ReactNode

The content of the Footer component

___

### formatters

• **formatters**: [*Formatters*](../types/formatters.md)

___

### fromDate

• `Optional` **fromDate**: *undefined* \| Date

___

### hideHead

• `Optional` **hideHead**: *undefined* \| *boolean*

___

### hideToday

• `Optional` **hideToday**: *undefined* \| *boolean*

Whether to show the today modifier.

___

### labels

• **labels**: [*Labels*](../types/labels.md)

___

### locale

• **locale**: Locale

___

### max

• `Optional` **max**: *undefined* \| *number*

___

### min

• `Optional` **min**: *undefined* \| *number*

___

### mode

• **mode**: [*SelectMode*](../types/selectmode.md)

___

### modifierClassNames

• **modifierClassNames**: *Record*<string, string\>

___

### modifierPrefix

• **modifierPrefix**: *string*

___

### modifierStyles

• `Optional` **modifierStyles**: *undefined* \| *Record*<string, CSSProperties\>

___

### modifiers

• **modifiers**: *Record*<string, [*Matcher*](../types/matcher.md)[]\>

Modifiers are converted to array of day matchers so they are easy to access.

___

### month

• `Optional` **month**: *undefined* \| Date

This is the `month` from the initial props - use `useNavigation` hook for getting the current month.

___

### numberOfMonths

• **numberOfMonths**: *number*

___

### onDayBlur

• `Optional` **onDayBlur**: *undefined* \| [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

___

### onDayClick

• `Optional` **onDayClick**: *undefined* \| [*DayClickEventHandler*](../types/dayclickeventhandler.md)

___

### onDayFocus

• `Optional` **onDayFocus**: *undefined* \| [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onMonthChange

• `Optional` **onMonthChange**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

___

### onSelect

• `Optional` **onSelect**: *undefined* \| [*SelectEventHandler*](selecteventhandler.md)

___

### onSelectMultiple

• `Optional` **onSelectMultiple**: *undefined* \| [*SelectMultipleEventHandler*](../types/selectmultipleeventhandler.md)

___

### onSelectRange

• `Optional` **onSelectRange**: *undefined* \| [*SelectRangeEventHandler*](../types/selectrangeeventhandler.md)

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: *undefined* \| [*WeekNumberClickEventHandler*](../types/weeknumberclickeventhandler.md)

___

### showOutsideDays

• `Optional` **showOutsideDays**: *undefined* \| *boolean*

___

### showWeekNumber

• `Optional` **showWeekNumber**: *undefined* \| *boolean*

___

### styles

• **styles**: *Partial*<[*StyledElement*](../types/styledelement.md)<CSSProperties\>\>

___

### toDate

• `Optional` **toDate**: *undefined* \| Date

Limit the navigation up to this date. Includes a parsed value from the `toMonth` and `toYear` props.

___

### today

• **today**: Date

The today’s date used for calculations.

___

### weekdays

• **weekdays**: Date[]

The weekdays used for the head
