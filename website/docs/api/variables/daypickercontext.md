---
id: "daypickercontext"
title: "Variable: DayPickerContext"
sidebar_label: "DayPickerContext"
custom_edit_url: null
hide_title: true
---

# Variable: DayPickerContext

• `Const` **DayPickerContext**: *Context*<undefined \| [*DayPickerContextUncontrolled*](../interfaces/daypickercontextuncontrolled.md) \| [*DayPickerContextSingle*](../interfaces/daypickercontextsingle.md) \| [*DayPickerContextMultiple*](../interfaces/daypickercontextmultiple.md) \| [*DayPickerContextRange*](../interfaces/daypickercontextrange.md)\>

The DayPicker context shares the props passed to DayPicker within the
internal components. It is used to set the default values and  perform
one-time calculations required to render the days.

Access this context via the [useDayPicker](../functions/usedaypicker.md) hook when using custom
components.
