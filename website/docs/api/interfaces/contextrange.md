---
id: "contextrange"
title: "Interface: ContextRange"
sidebar_label: "ContextRange"
custom_edit_url: null
hide_title: true
---

# Interface: ContextRange

## Hierarchy

* [*ContextBase*](contextbase.md)

  ↳ **ContextRange**

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

• `Optional` **defaultMonth**: Date

Inherited from: [ContextBase](contextbase.md).[defaultMonth](contextbase.md#defaultmonth)

___

### defaultSelected

• `Optional` **defaultSelected**: [*DateRange*](../types/daterange.md)

___

### dir

• `Optional` **dir**: *string*

Inherited from: [ContextBase](contextbase.md).[dir](contextbase.md#dir)

___

### disableNavigation

• `Optional` **disableNavigation**: *boolean*

Inherited from: [ContextBase](contextbase.md).[disableNavigation](contextbase.md#disablenavigation)

___

### fixedWeeks

• `Optional` **fixedWeeks**: *boolean*

Inherited from: [ContextBase](contextbase.md).[fixedWeeks](contextbase.md#fixedweeks)

___

### footer

• `Optional` **footer**: ReactNode

Inherited from: [ContextBase](contextbase.md).[footer](contextbase.md#footer)

___

### formatters

• **formatters**: [*Formatters*](../types/formatters.md)

Inherited from: [ContextBase](contextbase.md).[formatters](contextbase.md#formatters)

___

### fromDate

• `Optional` **fromDate**: Date

Inherited from: [ContextBase](contextbase.md).[fromDate](contextbase.md#fromdate)

___

### hideHead

• `Optional` **hideHead**: *boolean*

Inherited from: [ContextBase](contextbase.md).[hideHead](contextbase.md#hidehead)

___

### hideToday

• `Optional` **hideToday**: *boolean*

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

• `Optional` **max**: *number*

___

### min

• `Optional` **min**: *number*

___

### mode

• **mode**: *range*

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

• `Optional` **modifierStyles**: *Record*<string, CSSProperties\>

Inherited from: [ContextBase](contextbase.md).[modifierStyles](contextbase.md#modifierstyles)

___

### modifiers

• **modifiers**: *Record*<string, [*Matcher*](../types/matcher.md)[]\>

Inherited from: [ContextBase](contextbase.md).[modifiers](contextbase.md#modifiers)

___

### month

• `Optional` **month**: Date

Inherited from: [ContextBase](contextbase.md).[month](contextbase.md#month)

___

### numberOfMonths

• **numberOfMonths**: *number*

Inherited from: [ContextBase](contextbase.md).[numberOfMonths](contextbase.md#numberofmonths)

___

### onDayBlur

• `Optional` **onDayBlur**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayBlur](contextbase.md#ondayblur)

___

### onDayClick

• `Optional` **onDayClick**: [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayClick](contextbase.md#ondayclick)

___

### onDayFocus

• `Optional` **onDayFocus**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayFocus](contextbase.md#ondayfocus)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayKeyDown](contextbase.md#ondaykeydown)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayKeyUp](contextbase.md#ondaykeyup)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayMouseEnter](contextbase.md#ondaymouseenter)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayMouseLeave](contextbase.md#ondaymouseleave)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayTouchCancel](contextbase.md#ondaytouchcancel)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayTouchEnd](contextbase.md#ondaytouchend)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayTouchMove](contextbase.md#ondaytouchmove)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onDayTouchStart](contextbase.md#ondaytouchstart)

___

### onMonthChange

• `Optional` **onMonthChange**: [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onMonthChange](contextbase.md#onmonthchange)

___

### onSelect

• `Optional` **onSelect**: [*SelectRangeEventHandler*](../types/selectrangeeventhandler.md)

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: [*WeekNumberClickEventHandler*](../types/weeknumberclickeventhandler.md)

Inherited from: [ContextBase](contextbase.md).[onWeekNumberClick](contextbase.md#onweeknumberclick)

___

### showOutsideDays

• `Optional` **showOutsideDays**: *boolean*

Inherited from: [ContextBase](contextbase.md).[showOutsideDays](contextbase.md#showoutsidedays)

___

### showWeekNumber

• `Optional` **showWeekNumber**: *boolean*

Inherited from: [ContextBase](contextbase.md).[showWeekNumber](contextbase.md#showweeknumber)

___

### styles

• **styles**: *Partial*<[*StyledElement*](../types/styledelement.md)<CSSProperties\>\>

Inherited from: [ContextBase](contextbase.md).[styles](contextbase.md#styles)

___

### toDate

• `Optional` **toDate**: Date

Inherited from: [ContextBase](contextbase.md).[toDate](contextbase.md#todate)

___

### today

• **today**: Date

Inherited from: [ContextBase](contextbase.md).[today](contextbase.md#today)

___

### weekdays

• **weekdays**: Date[]

Inherited from: [ContextBase](contextbase.md).[weekdays](contextbase.md#weekdays)
