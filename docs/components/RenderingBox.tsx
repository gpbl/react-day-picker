export function RenderingBox(props: { children: React.ReactNode }) {
  return (
    <div className="px-8 py-8 flex justify-center nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40">
      {props.children}
    </div>
  );
}
