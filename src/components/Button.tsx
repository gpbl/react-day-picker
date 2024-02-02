import { ButtonHTMLAttributes } from "react";

/**
 * The component used to generate the button elements in the calendar.
 *
 * @category Custom Components
 */
export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />;
}
