export function Form(props: { children: React.ReactNode }) {
  return (
    <form className="my-4" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-6 pb-8 pr-4">{props.children}</div>
    </form>
  );
}
