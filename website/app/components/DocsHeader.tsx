import { PropsWithChildren, ReactNode } from 'react';

interface DocsHeaderProps extends PropsWithChildren {
  /** The title of the page */
  title: string;
  /** The title of the section */
  sectionTitle?: string;
  /** The first paragraph of the header */
  heading?: ReactNode;
}

/** The header for the docs pages. */
export function DocsHeader(props: DocsHeaderProps) {
  return (
    <header className="max-w-3xl mb-12">
      {props.sectionTitle && (
        <p className="mb-2 text-sm font-semibold text-blue-600">
          {props.sectionTitle}
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
