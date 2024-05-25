import type { OptionHTMLAttributes } from "react";

/**
 * Render the `option` element.
 *
 * @group Components
 */
export function Option(props: OptionHTMLAttributes<HTMLOptionElement>) {
  return <option {...props} />;
}
