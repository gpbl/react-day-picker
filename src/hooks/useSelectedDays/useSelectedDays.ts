import { useDayPicker } from "../../contexts/DayPicker";
import { useSelectMultiple } from "../../contexts/SelectMultiple";
import { useSelectRange } from "../../contexts/SelectRange";
import { useSelectSingle } from "../../contexts/SelectSingle";
import { DateRange } from "../../types/Matchers";
import { isDayPickerMultiple } from "../../types/PropsMulti";
import { isDayPickerRange } from "../../types/PropsRange";
import { isDayPickerSingle } from "../../types/PropsSingle";

export type SelectedDays = Date | Date[] | DateRange | undefined;

/**
 * Return the current selected days when DayPicker is in selection mode. Days
 * selected by the custom selection mode are not returned.
 *
 * This hook is meant to be used inside internal or custom components.
 */
export function useSelectedDays(): SelectedDays {
  const dayPicker = useDayPicker();
  const single = useSelectSingle();
  const multiple = useSelectMultiple();
  const range = useSelectRange();

  const selectedDays = isDayPickerSingle(dayPicker)
    ? single.selected
    : isDayPickerMultiple(dayPicker)
      ? multiple.selected
      : isDayPickerRange(dayPicker)
        ? range.selected
        : undefined;

  return selectedDays;
}
