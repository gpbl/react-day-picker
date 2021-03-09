---
id: "daypickercontextbase"
title: "Interface: DayPickerContextBase"
sidebar_label: "DayPickerContextBase"
custom_edit_url: null
hide_title: true
---

# Interface: DayPickerContextBase

Represent the base value of the DayPicker context.

## Hierarchy

* **DayPickerContextBase**

  ↳ [*DayPickerContextMultiple*](daypickercontextmultiple.md)

  ↳ [*DayPickerContextRange*](daypickercontextrange.md)

  ↳ [*DayPickerContextSingle*](daypickercontextsingle.md)

  ↳ [*DayPickerContextUncontrolled*](daypickercontextuncontrolled.md)

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

• `Optional` **defaultMonth**: Date

___

### dir

• `Optional` **dir**: *string*

___

### disableNavigation

• `Optional` **disableNavigation**: *boolean*

___

### fixedWeeks

• `Optional` **fixedWeeks**: *boolean*

___

### footer

• `Optional` **footer**: ReactNode

___

### formatters

• **formatters**: [*Formatters*](../types/formatters.md)

___

### fromDate

• `Optional` **fromDate**: Date

___

### hideHead

• `Optional` **hideHead**: *boolean*

___

### hideToday

• `Optional` **hideToday**: *boolean*

___

### labels

• **labels**: [*Labels*](../types/labels.md)

___

### locale

• **locale**: Locale

___

### modifierClassNames

• **modifierClassNames**: *Record*<string, string\>

___

### modifierPrefix

• **modifierPrefix**: *string*

___

### modifierStyles

• `Optional` **modifierStyles**: *Record*<string, CSSProperties\>

___

### modifiers

• **modifiers**: *Record*<string, [*Matcher*](../types/matcher.md)[]\>

___

### month

• `Optional` **month**: Date

___

### numberOfMonths

• **numberOfMonths**: *number*

___

### onDayBlur

• `Optional` **onDayBlur**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

___

### onDayClick

• `Optional` **onDayClick**: [*DayClickEventHandler*](../types/dayclickeventhandler.md)

___

### onDayFocus

• `Optional` **onDayFocus**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onMonthChange

• `Optional` **onMonthChange**: [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: [*WeekNumberClickEventHandler*](../types/weeknumberclickeventhandler.md)

___

### showOutsideDays

• `Optional` **showOutsideDays**: *boolean*

___

### showWeekNumber

• `Optional` **showWeekNumber**: *boolean*

___

### styles

• **styles**: *Partial*<[*StyledElement*](../types/styledelement.md)<CSSProperties\>\>

___

### toDate

• `Optional` **toDate**: Date

___

### today

• **today**: Date

___

### weekdays

• **weekdays**: Date[]
