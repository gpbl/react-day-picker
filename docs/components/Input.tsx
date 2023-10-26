import { HTMLInputTypeAttribute } from 'react';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label: string;
}

export const inputClassNames: Partial<Record<HTMLInputTypeAttribute, string>> =
  {
    radio: '',
    checkbox: ''
  };
export const defaultClassName =
  'appearance-none border border-neutral-400 rounded py-1 px-2';

export function Input(props: InputProps) {
  const { label, type = 'text', ...inputProps } = props;

  const className = inputClassNames[type] ?? defaultClassName;

  const labelClassName = `flex items-center justify-between gap-2 text-sm${
    props.disabled ? ' text-neutral-400' : ''
  }`;
  return (
    <label className={labelClassName}>
      {type !== 'text' && <span className="font-mono">{label}</span>}
      <input {...inputProps} type={type} className={className} />
      {type === 'text' && <span className="font-mono">{label}</span>}
    </label>
  );
}
