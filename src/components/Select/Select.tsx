export type SelectProps = React.HTMLProps<HTMLSelectElement>;

export function Select(props: SelectProps) {
  return <select {...props} />;
}
