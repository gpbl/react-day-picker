import { addMonths } from "date-fns";

import { useDayPicker } from "../contexts/DayPicker";
import { useNavigation } from "../contexts/Navigation";
import { MonthChangeEventHandler } from "../types/events";

import { MonthCaptionProps } from "./MonthCaption";
import { CaptionLabel } from "./CaptionLabel";
import { MonthsDropdown } from "./MonthsDropdown";
import { YearsDropdown } from "./YearsDropdown";

/** Render a caption with the dropdowns to navigate between months and years. */
export function CaptionDropdowns(props: MonthCaptionProps): JSX.Element {
  const { classNames, styles, components } = useDayPicker();
  const { goToMonth } = useNavigation();

  const handleMonthChange: MonthChangeEventHandler = (newMonth) => {
    goToMonth(
      addMonths(newMonth, props.displayIndex ? -props.displayIndex : 0)
    );
  };
  const CaptionLabelComponent = components?.CaptionLabel ?? CaptionLabel;
  const captionLabel = (
    <CaptionLabelComponent id={props.id} displayMonth={props.displayMonth} />
  );
  return (
    <div
      className={classNames.caption_dropdowns}
      style={styles.caption_dropdowns}
    >
      {/* Caption label is visually hidden but for a11y. */}
      <div className={classNames.vhidden}>{captionLabel}</div>
      <MonthsDropdown
        onChange={handleMonthChange}
        displayMonth={props.displayMonth}
      />
      <YearsDropdown
        onChange={handleMonthChange}
        displayMonth={props.displayMonth}
      />
    </div>
  );
}
