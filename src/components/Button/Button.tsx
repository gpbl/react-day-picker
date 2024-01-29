import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/** @category Custom Components */
export function Button(props: ButtonProps) {
  return <button {...props} />;
}
