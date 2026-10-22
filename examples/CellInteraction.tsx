import { DayPicker } from "@daypicker/react";
import React, { useState } from "react";

/** Compare button and grid-cell interaction with a screen reader. */
export function CellInteraction() {
  const [mode, setMode] = useState<"single" | "multiple" | "range">("single");
  const [dayInteraction, setDayInteraction] = useState<"button" | "cell">(
    "cell",
  );
  return (
    <div>
      <label>
        Selection mode{" "}
        <select
          value={mode}
          onChange={(event) => setMode(event.target.value as typeof mode)}
        >
          <option value="single">Single</option>
          <option value="multiple">Multiple</option>
          <option value="range">Range</option>
        </select>
      </label>{" "}
      <label>
        Date interaction{" "}
        <select
          value={dayInteraction}
          onChange={(event) =>
            setDayInteraction(event.target.value as typeof dayInteraction)
          }
        >
          <option value="cell">Grid cell</option>
          <option value="button">Button (default)</option>
        </select>
      </label>
      <p>
        Tab to a date, use arrow keys to navigate, and Enter or Space to select.
      </p>
      <DayPicker
        key={`${mode}-${dayInteraction}`}
        mode={mode}
        required={false}
        dayInteraction={dayInteraction}
      />
    </div>
  );
}
