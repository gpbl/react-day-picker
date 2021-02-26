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

• **classNames**: [*ClassNames*](../types/classnames.md)

___

### components

• **components**: [*Components*](components.md)

___

### defaultMonth

• `Optional` **defaultMonth**: *undefined* \| Date

___

### defaultSelected

• `Optional` **defaultSelected**: *undefined* \| Date \| Date[] \| [*DateRange*](../types/daterange.md)

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

• `Optional` **footer**: *undefined* \| *ReactElement*<any, string \| (`props`: *any*) => *null* \| *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\>

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

### labels

• **labels**: [*Labels*](../types/labels.md)

___

### locale

• **locale**: Locale

___

### mode

• **mode**: [*SelectMode*](../types/selectmode.md)

___

### modifierClassNames

• **modifierClassNames**: [*ModifierClassNames*](../types/modifierclassnames.md)

___

### modifierPrefix

• **modifierPrefix**: *string*

___

### modifierStyles

• `Optional` **modifierStyles**: *undefined* \| [*ModifierStyles*](../types/modifierstyles.md)

___

### modifiers

• **modifiers**: [*ModifierMatchers*](../types/modifiermatchers.md)

___

### month

• `Optional` **month**: *undefined* \| Date

This is the `month` from the initial props - use `useNavigation` hook for getting the current month.

___

### numberOfMonths

• **numberOfMonths**: *number*

___

### onDayClick

• `Optional` **onDayClick**: *undefined* \| [*DayClickEventHandler*](../types/dayclickeventhandler.md)

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

• `Optional` **onSelectRange**: *undefined* \| RangeSelectionHandler

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: *undefined* \| [*WeekNumberClickEventHandler*](../types/weeknumberclickeventhandler.md)

___

### required

• `Optional` **required**: *undefined* \| *boolean*

___

### showOutsideDays

• `Optional` **showOutsideDays**: *undefined* \| *boolean*

___

### showWeekNumber

• `Optional` **showWeekNumber**: *undefined* \| *boolean*

___

### styles

• **styles**: [*Styles*](../types/styles.md)

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
