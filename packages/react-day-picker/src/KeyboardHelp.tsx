import React, { useEffect, useState } from "react";

/** Announce instructions once on grid entry, after the focused date. */
export function KeyboardHelp(props: { active: boolean; text: string }) {
  const { active, text } = props;
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (!active || !text) {
      setMessage("");
      return;
    }
    const timeout = setTimeout(() => setMessage(text), 200);
    return () => clearTimeout(timeout);
  }, [active, text]);

  return (
    <span
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      {active ? message : ""}
    </span>
  );
}
