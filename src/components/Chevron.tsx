import React from "react";

import { ChevronFlag, UI } from "../UI.js";
import type { ClassNames } from "../types/index.js";

/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/advanced-guides/custom-components
 */
export function Chevron(props: {
  classNames: Pick<ClassNames, UI.Chevron | ChevronFlag.disabled>;
  size?: number;
  disabled?: boolean;
  orientation?: "up" | "down" | "left" | "right";
}) {
  const { size = 24, orientation = "left", classNames } = props;

  const svgClassName = [
    classNames[UI.Chevron],
    props.disabled ? classNames[ChevronFlag.disabled] : ""
  ]
    .filter(Boolean)
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
        <polygon points="16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" />
      )}
      {orientation === "right" && (
        <polygon points="8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5"></polygon>
      )}
    </svg>
  );
}
