export interface FieldsetProps
  extends React.HTMLAttributes<HTMLFieldSetElement> {
  /** The legend of the fieldset. */
  legend: string;
}
/**
 * Wrap a fieldset with tailwind-css.
 */
export function Fieldset(props: FieldsetProps) {
  return (
    <fieldset className="snap-start flex-shrink-0 flex flex-col gap-2">
      <legend
        className="font-semibold text-lg mb-2"
        style={{ position: 'sticky', top: 'var(--nextra-navbar-height)' }}
      >
        {props.legend}
      </legend>
      {props.children}
    </fieldset>
  );
}
