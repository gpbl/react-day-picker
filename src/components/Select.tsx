import type { SelectHTMLAttributes } from "react";

/** Render the `select` element. */
export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} />;
}
