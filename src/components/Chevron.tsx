import React from "react";

import { ChevronFlag, UI } from "../UI";
import { useProps } from "../contexts";

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
  const { classNames, disableNavigation } = useProps();

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
        <polygon
          id="Path"
          points="15.6 18.112 9.65866667 12 15.6 5.87733333 13.7653333 4 6 12 13.7653333 20"
        ></polygon>
      )}
      {orientation === "right" && (
        <polygon
          id="Path"
          points="7.4 18.112 13.3413333 12 7.4 5.87733333 9.23466667 4 17 12 9.23466667 20"
        ></polygon>
      )}
    </svg>
  );
}
