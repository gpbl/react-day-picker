export function Form(props: { children: React.ReactNode }) {
  return (
    <form className="my-4" onSubmit={(e) => e.preventDefault()}>
      <div className="flex overflow-scroll snap-start snap-mandatory gap-8 pb-8 pr-4">
        {props.children}
      </div>
    </form>
  );
}
