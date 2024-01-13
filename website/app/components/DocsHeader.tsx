import { PropsWithChildren, ReactNode } from 'react';

interface DocsHeaderProps extends PropsWithChildren {
  /** The title of the section */
  section?: string;
  /** The title of the page */
  title?: string;
  /** The first paragraph of the header */
  heading?: ReactNode;
}

/** The header for the docs pages. */
export function DocsHeader(props: DocsHeaderProps) {
  if (!props.title) return null;
  return (
    <header className="max-w-3xl border-solid border-b border-slate-400 pb-2 mb-12">
      {props.section && (
        <p className="mb-2 text-sm font-semibold text-blue-600">
          {props.section}
        </p>
      )}
      <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
        {props.title}
      </h1>
      {props.heading && (
        <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
          {props.heading}
        </p>
      )}
      {props.children}
    </header>
  );
}
