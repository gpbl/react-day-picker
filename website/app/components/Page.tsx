import { PropsWithChildren } from 'react';

export function Page(props: PropsWithChildren) {
  return (
    <div className="lg:max-w-3xl mx-auto xl:max-w-none xl:ms-0 xl:me-64 xl:pe-16">
      {props.children}
    </div>
  );
}
