import type { OptionHTMLAttributes } from 'react';

/**
 * Render the `option` element.
 *
 * @category Custom Components
 */
export function Option(props: OptionHTMLAttributes<HTMLOptionElement>) {
  return <option {...props} />;
}
