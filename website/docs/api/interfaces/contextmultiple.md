---
id: "contextmultiple"
title: "Interface: ContextMultiple"
sidebar_label: "ContextMultiple"
custom_edit_url: null
hide_title: true
---

# Interface: ContextMultiple

## Hierarchy

* [*ContextBase*](contextbase.md)

  ↳ **ContextMultiple**

## Properties

### captionLayout

• **captionLayout**: [*CaptionLayout*](../types/captionlayout.md)

Inherited from: [ContextBase](contextbase.md).[captionLayout](contextbase.md#captionlayout)

___

### classNames

• **classNames**: *Required*<Partial<[*StyledElement*](../types/styledelement.md)<string\>\>\>

Inherited from: [ContextBase](contextbase.md).[classNames](contextbase.md#classnames)

___

### components

• **components**: [*Components*](components.md)

Inherited from: [ContextBase](contextbase.md).[components](contextbase.md#components)

___

### defaultMonth

• `Optional` **defaultMonth**: *undefined* \| Date

Inherited from: [ContextBase](contextbase.md).[defaultMonth](contextbase.md#defaultmonth)

___

### defaultSelected

• `Optional` **defaultSelected**: *undefined* \| Date[]

___

### dir

• `Optional` **dir**: *undefined* \| *string*

Inherited from: [ContextBase](contextbase.md).[dir](contextbase.md#dir)

___

### disableNavigation

• `Optional` **disableNavigation**: *undefined* \| *boolean*

Inherited from: [ContextBase](contextbase.md).[disableNavigation](contextbase.md#disablenavigation)

___

### fixedWeeks

• `Optional` **fixedWeeks**: *undefined* \| *boolean*

Inherited from: [ContextBase](contextbase.md).[fixedWeeks](contextbase.md#fixedweeks)

___

### footer

• `Optional` **footer**: ReactNode

The content of the Footer component

Inherited from: [ContextBase](contextbase.md).[footer](contextbase.md#footer)

___

### formatters

• **formatters**: [*Formatters*](../types/formatters.md)

Inherited from: [ContextBase](contextbase.md).[formatters](contextbase.md#formatters)

___

### fromDate

• `Optional` **fromDate**: *undefined* \| Date

Inherited from: [ContextBase](contextbase.md).[fromDate](contextbase.md#fromdate)

___

### hideHead

• `Optional` **hideHead**: *undefined* \| *boolean*

Inherited from: [ContextBase](contextbase.md).[hideHead](contextbase.md#hidehead)

___

### hideToday

• `Optional` **hideToday**: *undefined* \| *boolean*

Whether to show the today modifier.

Inherited from: [ContextBase](contextbase.md).[hideToday](contextbase.md#hidetoday)

___

### labels

• **labels**: [*Labels*](../types/labels.md)

Inherited from: [ContextBase](contextbase.md).[labels](contextbase.md#labels)

___

### locale

• **locale**: Locale

Inherited from: [ContextBase](contextbase.md).[locale](contextbase.md#locale)

___

### max

• `Optional` **max**: *undefined* \| *number*

___

### min

• `Optional` **min**: *undefined* \| *number*

___

### mode

• **mode**: *multiple*

___

### modifierClassNames

• **modifierClassNames**: *Record*<string, string\>

Inherited from: [ContextBase](contextbase.md).[modifierClassNames](contextbase.md#modifierclassnames)

___

### modifierPrefix

• **modifierPrefix**: *string*

Inherited from: [ContextBase](contextbase.md).[modifierPrefix](contextbase.md#modifierprefix)

___

### modifierStyles

• `Optional` **modifierStyles**: *undefined* \| *Record*<string, CSSProperties\>

Inherited from: [ContextBase](contextbase.md).[modifierStyles](contextbase.md#modifierstyles)

___

### modifiers

• **modifiers**: *Record*<string, [*Matcher*](../types/matcher.md)[]\>

Modifiers are converted to array of day matchers so they are easy to access.

Inherited from: [ContextBase](contextbase.md).[modifiers](contextbase.md#modifiers)

___

### month

• `Optional` **month**: *undefined* \| Date

This is the `month` from the initial props - use `useNavigation` hook for getting the current month.

Inherited from: [ContextBase](contextbase.md).[month](contextbase.md#month)

___

### numberOfMonths

• **numberOfMonths**: *number*

Inherited from: [ContextBase](contextbase.md).[numberOfMonths](contextbase.md#numberofmonths)

___

### onDayBlur

• `Optional` **onDayBlur**: *undefined* \| [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayBlur](contextbase.md#ondayblur)

___

### onDayClick

• `Optional` **onDayClick**: *undefined* \| [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayClick](contextbase.md#ondayclick)

___

### onDayFocus

• `Optional` **onDayFocus**: *undefined* \| [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayFocus](contextbase.md#ondayfocus)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayKeyDown](contextbase.md#ondaykeydown)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayKeyUp](contextbase.md#ondaykeyup)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayMouseEnter](contextbase.md#ondaymouseenter)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayMouseLeave](contextbase.md#ondaymouseleave)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayTouchCancel](contextbase.md#ondaytouchcancel)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayTouchEnd](contextbase.md#ondaytouchend)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayTouchMove](contextbase.md#ondaytouchmove)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayTouchStart](contextbase.md#ondaytouchstart)

___

### onMonthChange

• `Optional` **onMonthChange**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onMonthChange](contextbase.md#onmonthchange)

___

### onSelect

• `Optional` **onSelect**: *undefined* \| [*SelectMultipleEventHandler*](../types/selectmultipleeventhandler.md)

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: *undefined* \| [*WeekNumberClickEventHandler*](../types/weeknumberclickeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onWeekNumberClick](contextbase.md#onweeknumberclick)

___

### showOutsideDays

• `Optional` **showOutsideDays**: *undefined* \| *boolean*

Inherited from: [ContextBase](contextbase.md).[showOutsideDays](contextbase.md#showoutsidedays)

___

### showWeekNumber

• `Optional` **showWeekNumber**: *undefined* \| *boolean*

Inherited from: [ContextBase](contextbase.md).[showWeekNumber](contextbase.md#showweeknumber)

___

### styles

• **styles**: *Partial*<[*StyledElement*](../types/styledelement.md)<CSSProperties\>\>

Inherited from: [ContextBase](contextbase.md).[styles](contextbase.md#styles)

___

### toDate

• `Optional` **toDate**: *undefined* \| Date

Limit the navigation up to this date. Includes a parsed value from the `toMonth` and `toYear` props.

Inherited from: [ContextBase](contextbase.md).[toDate](contextbase.md#todate)

___

### today

• **today**: Date

The today’s date used for calculations.

Inherited from: [ContextBase](contextbase.md).[today](contextbase.md#today)

___

### weekdays

• **weekdays**: Date[]

The weekdays used for the head

Inherited from: [ContextBase](contextbase.md).[weekdays](contextbase.md#weekdays)
