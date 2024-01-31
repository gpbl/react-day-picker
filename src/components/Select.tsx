import type { SelectHTMLAttributes } from 'react';

/**
 * Render the `select` element.
 *
 * @category Custom Components
 */
export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} />;
}
