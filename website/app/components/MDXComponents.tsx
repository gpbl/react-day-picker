import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import classNames from 'classnames';

import { Frontmatter } from '@/utils/docs.server';
import { Link2Icon } from '@radix-ui/react-icons';
// import { Frontmatter } from 'types/frontmatter';
import {
  Blockquote,
  Box,
  Code,
  Em,
  Heading,
  Kbd,
  Link,
  Separator,
  Strong,
  Text
} from '@radix-ui/themes';
import { Link as RemixLink } from '@remix-run/react';

import styles from './MDXComponents.module.css';
import { Pre } from './Pre';

export const components = {
  // ...themesComponents,
  // Tabs: Tabs.Root,
  // TabsList: Tabs.List,
  // TabsContent: Tabs.Content,
  // TabsTrigger: Tabs.Trigger,
  // CodeBlock,
  h1: (props: PropsWithChildren) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isFirstRender, setIsFirstRender] = useState(true);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setIsFirstRender(false);
    }, []);
    return (
      <Heading asChild size="8" mb="3">
        <h1 {...props} style={{ scrollMarginTop: 'var(--space-9)' }}>
          {isFirstRender ? 'first' : ''}
          {props.children}
        </h1>
      </Heading>
    );
  },
  // Description: ({
  //   children,
  //   ...props
  // }: {
  //   children: { props: PropsWithChildren<React.ReactNode> };
  // }) => {
  //   const childText =
  //     typeof children === 'string' ? children : children.props.children;
  //   return (
  //     <Text as="p" size="4" mt="2" mb="7" color="gray" {...props}>
  //       {childText}
  //     </Text>
  //   );
  // },
  h2: (props: PropsWithChildren<{ id?: string }>) => {
    const { children, id } = props;
    return (
      <Heading
        size="6"
        mt="7"
        mb="2"
        asChild
        {...props}
        id={id}
        style={{ scrollMarginTop: 'var(--space-9)' }}
        data-heading
      >
        <h2>{id ? <LinkHeading id={id}>{children}</LinkHeading> : children}</h2>
      </Heading>
    );
  },
  h3: (props: PropsWithChildren<{ id?: string }>) => {
    const { children, id } = props;
    return (
      <Heading
        size="5"
        mt="7"
        mb="2"
        asChild
        {...props}
        id={id}
        style={{ scrollMarginTop: 'var(--space-9)' }}
        data-heading
      >
        <h2>{id ? <LinkHeading id={id}>{children}</LinkHeading> : children}</h2>
      </Heading>
    );
  },
  h4: (props: PropsWithChildren) => {
    const { children } = props;
    return (
      <Heading asChild size="4" mt="6" mb="3" {...props}>
        <h4 style={{ scrollMarginTop: 'var(--space-9)' }}>{children}</h4>
      </Heading>
    );
  },
  p: (props: PropsWithChildren) => <Text mb="3" as="p" size="3" {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return <Link {...props} href={href} target="_blank" rel="noopener" />;
    }
    return (
      <RemixLink to={href}>
        <Link {...props} />
      </RemixLink>
    );
  },
  hr: (props: PropsWithChildren) => (
    <Separator size="2" {...props} my="6" style={{ marginInline: 'auto' }} />
  ),
  ul: (props: PropsWithChildren) => <ul {...props} />,
  ol: (props: PropsWithChildren) => <ol {...props} />,
  li: (props: PropsWithChildren) => (
    <li className={styles.ListItem}>
      <Text {...props} />
    </li>
  ),
  em: (props: PropsWithChildren) => <Em {...props} />,
  strong: (props: PropsWithChildren) => <Strong {...props} />,
  img: ({ ...props }) => (
    <Box my="6">
      <img
        alt={props.alt}
        {...props}
        style={{
          maxWidth: '100%',
          verticalAlign: 'middle'
        }}
      />
    </Box>
  ),
  blockquote: (props: PropsWithChildren) => <Blockquote {...props} />,
  pre: (props: PropsWithChildren) => <Pre {...props} />,
  code: (props: PropsWithChildren) => {
    const isInline = typeof props.children === 'string';
    if (isInline) {
      return <Code {...props} />;
    }
    return (
      <Box my="6">
        <code {...props} />
      </Box>
    );
  },
  kbd: (props: PropsWithChildren) => <Kbd {...props} />
  // code: ({
  //   className,
  //   line,
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   style,
  //   ...props
  // }: {
  //   className: string;
  //   line: string;
  //   style: string;
  // }) => {
  //   // if it's a codeblock (``` block in markdown), it'll have a className from prism
  //   const isInlineCode = !className;
  //   return isInlineCode ? (
  //     <Code
  //       className={className}
  //       {...props}
  //       style={{
  //         whiteSpace: 'break-spaces'
  //       }}
  //     />
  //   ) : (
  //     <code
  //       className={className}
  //       {...props}
  //       data-invert-line-highlight={line !== undefined}
  //     />
  //   );
  // }
  // Note: ({ children, ...props }: PropsWithChildren<PropsWithChildren>) => (
  //   <Box className={styles.Note} asChild {...props}>
  //     <aside>{children}</aside>
  //   </Box>
  // ),
  // Code,
  // PropsTable: (props: PropsWithChildren) => (
  //   <Box my="4">
  //     <PropsTable {...props} />
  //   </Box>
  // ),
  // TabsCodeBlock: (props: TabsRootProps) => (
  //   <Tabs.Root {...props}>
  //     <Box className={styles.TabsCodeBlock}>{props.children}</Box>
  //   </Tabs.Root>
  // ),
  // TabsCodeBlockContent: (props: PropsWithChildren<HTMLElement>) => (
  //   <CodeBlock {...props} data-style={{ boxShadow: 'none', borderRadius: 0 }} />
  // )
};

function LinkHeading({
  id,
  children,
  className,
  ...props
}: {
  id: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Link>) {
  return (
    <Link
      asChild
      weight="bold"
      highContrast
      color="gray"
      underline="hover"
      {...props}
    >
      <a
        id={id}
        href={`#${id}`}
        className={classNames(className, styles.LinkHeading)}
      >
        {children}

        <Link2Icon aria-hidden />
      </a>
    </Link>
  );
}

export const FrontmatterContext = createContext<Frontmatter>({});
