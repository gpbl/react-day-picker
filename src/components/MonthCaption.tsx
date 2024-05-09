import { useDayPicker } from "../contexts/DayPicker";

import { CaptionDropdowns as DefaultCaptionDropdowns } from "./CaptionDropdowns";
import { CaptionLabel as DefaultCaptionLabel } from "./CaptionLabel";
import { CaptionNavigation as DefaultCaptionNavigation } from "./CaptionNavigation";

export interface MonthCaptionProps {
  /**
   * The ID for the heading element. Must be the same as the labelled-by in
   * Table.
   */
  id?: string;
  /** The month where the caption is displayed. */
  displayMonth: Date;
  /**
   * The index of the month where the caption is displayed. Older custom
   * components may miss this prop.
   */
  displayIndex?: number | undefined;
}

/**
 * The layout of the caption:
 *
 * - `dropdown`: display dropdowns for choosing the month and the year.
 * - `buttons`: display previous month / next month buttons.
 * - `dropdown-buttons`: display both month / year dropdowns and previous month /
 *   next month buttons.
 */
export type CaptionLayout = "dropdown" | "buttons" | "dropdown-buttons";

/**
 * Render the caption of a month. The caption has a different layout when
 * setting the {@link PropsBase.captionLayout} prop.
 */
export function MonthCaption(props: MonthCaptionProps): JSX.Element {
  const { classNames, disableNavigation, styles, captionLayout, components } =
    useDayPicker();

  const CaptionLabel = components?.CaptionLabel ?? DefaultCaptionLabel;

  let caption: JSX.Element;
  if (disableNavigation) {
    caption = <CaptionLabel id={props.id} displayMonth={props.displayMonth} />;
  } else if (captionLayout === "dropdown") {
    caption = (
      <DefaultCaptionDropdowns
        displayMonth={props.displayMonth}
        id={props.id}
      />
    );
  } else if (captionLayout === "dropdown-buttons") {
    caption = (
      <>
        <DefaultCaptionDropdowns
          displayMonth={props.displayMonth}
          displayIndex={props.displayIndex}
          id={props.id}
        />
        <DefaultCaptionNavigation
          displayMonth={props.displayMonth}
          displayIndex={props.displayIndex}
          id={props.id}
        />
      </>
    );
  } else {
    caption = (
      <>
        <CaptionLabel
          id={props.id}
          displayMonth={props.displayMonth}
          displayIndex={props.displayIndex}
        />
        <DefaultCaptionNavigation
          displayMonth={props.displayMonth}
          id={props.id}
        />
      </>
    );
  }

  return (
    <div className={classNames.caption} style={styles.caption}>
      {caption}
    </div>
  );
}
