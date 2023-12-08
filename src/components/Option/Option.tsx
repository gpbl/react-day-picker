import { OptionHTMLAttributes } from 'react';

export type OptionProps = OptionHTMLAttributes<HTMLOptionElement>;

export function Option(props: OptionProps) {
  return <option {...props} />;
}
