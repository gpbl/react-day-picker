---
id: "contextbase"
title: "Interface: ContextBase"
sidebar_label: "ContextBase"
custom_edit_url: null
hide_title: true
---

# Interface: ContextBase

Represent the value of the daypicker context.

## Hierarchy

* **ContextBase**

  ↳ [*ContextMultiple*](contextmultiple.md)

  ↳ [*ContextRange*](contextrange.md)

  ↳ [*ContextSingle*](contextsingle.md)

  ↳ [*ContextUncontrolled*](contextuncontrolled.md)

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

• `Optional` **modifierStyles**: *undefined* \| *Record*<string, CSSProperties\>

___

### modifiers

• **modifiers**: *Record*<string, [*Matcher*](../types/matcher.md)[]\>

___

### month

• `Optional` **month**: *undefined* \| Date

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

___

### today

• **today**: Date

___

### weekdays

• **weekdays**: Date[]
