import type { OptionHTMLAttributes } from "react";

/** Render the `option` element. */
export function Option(props: OptionHTMLAttributes<HTMLOptionElement>) {
  return <option {...props} />;
}
