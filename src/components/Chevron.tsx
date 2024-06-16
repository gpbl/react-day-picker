import React from "react";

import { ChevronFlag, UI } from "../UI";
import { usePropsContext } from "../contexts/usePropsContext";

/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function Chevron(props: {
  size?: number;
  orientation?: "up" | "down" | "left" | "right";
}) {
  const { size = 24, orientation = "left" } = props;
  const { classNames, disableNavigation } = usePropsContext();

  const svgClassName = [
    classNames[UI.Chevron],
    disableNavigation ? classNames[ChevronFlag.disabled] : ""
  ]
    .join(" ")
    .trim();
  return (
    <svg
      className={svgClassName}
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      {orientation === "up" && (
        <polygon points="6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" />
      )}
      {orientation === "down" && (
        <polygon points="6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" />
      )}
      {orientation === "left" && (
        <polygon points="15 17.23 9.43 11.5 15 5.76 13.28 4 6 11.5 13.28 19" />
      )}
      {orientation === "right" && (
        <polygon points="8 18.23 13.57 12.5 8 6.76 9.72 5 17 12.5 9.72 20" />
      )}
    </svg>
  );
}
