export interface SelectProps
  extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'className'> {
  label: string;
}

export function Select(props: SelectProps) {
  const { label, ...selectProps } = props;

  const labelClassName = `flex items-center justify-between gap-2 text-sm${
    props.disabled ? ' text-neutral-400' : ''
  }`;
  return (
    <label className={labelClassName}>
      <span className="font-mono">{label}</span>
      <select
        {...selectProps}
        className="form-select appearance-none border border-neutral-400 rounded py-1 px-2 text-current"
      >
        {props.children}
      </select>
    </label>
  );
}
