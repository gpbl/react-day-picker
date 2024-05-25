import type { SelectHTMLAttributes } from "react";

/**
 * Render the `select` element.
 *
 * @group Components
 */
export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} />;
}
