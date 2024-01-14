import { Heading, Text } from '@radix-ui/themes';
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
    <header className="border-b pb-10 mb-10 dark:border-gray-700">
      {props.section && (
        <Text asChild size="2" color="blue" weight="bold" mb="2">
          <p>{props.section}</p>
        </Text>
      )}
      <Heading asChild size="7" mb="2">
        <h1>{props.title}</h1>
      </Heading>
      {props.heading && (
        <Text color="gray" size="5" asChild>
          <p>{props.heading}</p>
        </Text>
      )}
      {props.children}
    </header>
  );
}
