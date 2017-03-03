# Component API

* [Component props](APIProps.md)
* [Component methods](APIMethods.md)

## Props quick reference

| Prop | Default | Type |
| --- | --- | --- |
| [canChangeMonth](APIProps.md#canchangemonth) | true | `Bool` |
| [captionElement](APIProps.md#captionelement) | | `Element` |
| [className](APIProps.md#className) | | `String` |
| [classNames](APIProps.md#classNames) | | `Object` |
| [containerProps](APIProps.md#containerprops) | | `Object` |
| [disabledDays](APIProps.md#disableddays) | | See [modifiers](Modifiers.md) |
| [enableOutsideDays](APIProps.md#enableoutsidedays) | false | `Bool` |
| [firstDayOfWeek](APIProps.md#firstdayofweek) | 0 | `Number` |
| [fixedWeeks](APIProps.md#fixedWeeks) | false | `Bool` |
| [fromMonth](APIProps.md#frommonth) | | `Date` |
| [initialMonth](APIProps.md#initialmonth) | Current month | `Date` |
| [locale](APIProps.md#locale) | en | `String` |
| [localeUtils](APIProps.md#localeutils) | | `Object` |
| [modifiers](APIProps.md#modifiers) | | `Object` of [modifiers](Modifiers.md) |
| [month](APIProps.md#month) | | `Date` |
| [months](APIProps.md#months) | | `Array<String>` |
| [navbarElement](APIProps.md#navbarelement) | | `Element` |
| [numberOfMonths](APIProps.md#numberofmonths) | 1 | `Number` |
| [onCaptionClick](APIProps.md#oncaptionclick) | | `(currentMonth: Date, e: SyntethicEvent) ⇒ void` |
| [onBlur](APIProps.md#onblur) | | `(e: SyntethicEvent) ⇒ void` |
| [onDayClick](APIProps.md#ondayclick) | | `(day: Date, modifiers: Object, e: SyntethicEvent) ⇒ void` |
| [onDayMouseEnter](APIProps.md#ondaymouseenter) | | `(day: Date, modifiers: Object, e: SyntethicEvent) ⇒ void` |
| [onDayMouseLeave](APIProps.md#ondaymouseleave) | | `(day: Date, modifiers: Object, e: SyntethicEvent) ⇒ void` |
| [onDayTouchStart](APIProps.md#ondaytouchstart) | | `(day: Date, modifiers: Object, e: SyntethicEvent) ⇒ void` |
| [onDayTouchEnd](APIProps.md#ondaytouchend) | | `(day: Date, modifiers: Object, e: SyntethicEvent) ⇒ void` |
| [onFocus](APIProps.md#onfocus) | | `(e: SyntethicEvent) ⇒ void` |
| [onKeyDown](APIProps.md#onkeydown) | | `(e: SyntethicEvent) ⇒ void` |
| [onMonthChange](APIProps.md#onmonthchange) | | `(month: Date) ⇒ void` |
| [pagedNavigation](APIProps.md#pagednavigation) |false | `Bool` |
| [renderDay](APIProps.md#renderday) | day ⇒ day.getDate() | `(day: Date) ⇒ Element` |
| [reverseMonths](APIProps.md#reversemonths) | false | `Bool` |
| [selectedDays](APIProps.md#selecteddays) | | See [modifiers](Modifiers.md) |
| [tabIndex](APIProps.md#tabindex) | | `Number` |
| [toMonth](APIProps.md#tomonth) | | `Date` |
| [weekdayElement](APIProps.md#weekdayelement) | | `Element` |
| [weekdaysShort](APIProps.md#weekdaysshort) | | `Array<String>` |
| [weekdaysLong](APIProps.md#weekdayslong) | | `Array<String>` |
