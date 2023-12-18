import type { SelectHTMLAttributes } from 'react';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select(props: SelectProps) {
  return <select {...props} />;
}
