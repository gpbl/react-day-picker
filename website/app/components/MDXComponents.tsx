import { createContext, PropsWithChildren } from 'react';

import type { MDXComponents } from 'mdx/types';
import { DayPicker } from 'react-day-picker';
import * as Examples from '@/examples';

import { classNames } from '@/lib/classNames';
import { Frontmatter } from '@/lib/docs.server';
import { Link2Icon } from '@radix-ui/react-icons';
// import { Frontmatter } from 'types/frontmatter';
import {
  Blockquote,
  Box,
  Card,
  Code,
  Em,
  Flex,
  Heading,
  Kbd,
  Link,
  Separator,
  Strong,
  Tabs,
  Text
} from '@radix-ui/themes';
import { Link as RemixLink } from '@remix-run/react';

import styles from './MDXComponents.module.css';
import { Pre } from './Pre';
import { PreviewBox } from './PreviewBox';
import { PropsTable } from './PropsTable';

export const mdxComponents: MDXComponents = {
  DayPicker,

  PreviewBox,
  PropsTable,
  Pre,

  Examples,

  Text,
  Card,
  Box,
  Tabs: Tabs.Root,
  TabsList: Tabs.List,
  TabsContent: Tabs.Content,
  TabsTrigger: Tabs.Trigger,

  h1: (props: PropsWithChildren) => {
    return (
      <Heading asChild size="8" mb="3">
        <h1 {...props} style={{ scrollMarginTop: 'var(--space-9)' }}>
          {props.children}
        </h1>
      </Heading>
    );
  },
  Description: ({
    children,
    ...props
  }: {
    children: { props: PropsWithChildren<React.ReactNode> };
  }) => {
    const childText =
      typeof children === 'string' ? children : children.props.children;
    return (
      <Text as="p" size="4" mt="2" mb="2" color="gray" {...props}>
        {childText}
      </Text>
    );
  },
  SectionTitle: ({
    children,
    ...props
  }: {
    children: { props: PropsWithChildren<React.ReactNode> };
  }) => {
    const childText =
      typeof children === 'string' ? children : children.props.children;
    return (
      <Text
        as="p"
        size="4"
        style={{ color: 'var(--accent-a9)' }}
        weight="bold"
        mb="2"
        {...props}
      >
        {childText}
      </Text>
    );
  },
  h2: (props: PropsWithChildren<{ id?: string }>) => {
    const { children, id } = props;
    return (
      <Heading
        size="6"
        mt="8"
        mb="3"
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
        mt="8"
        mb="3"
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
  h4: function (props: PropsWithChildren) {
    const { children } = props;
    return (
      <Heading asChild size="4" mt="6" mb="3" {...props}>
        <h4 style={{ scrollMarginTop: 'var(--space-9)' }}>{children}</h4>
      </Heading>
    );
  },
  p: (props: PropsWithChildren) => <Text mb="5" as="p" size="3" {...props} />,
  a: (props: PropsWithChildren<{ href?: string }>) => {
    const { href = '', ...restProps } = props;
    if (href.startsWith('http')) {
      return <Link {...restProps} href={href} target="_blank" rel="noopener" />;
    }
    return (
      <RemixLink to={href}>
        <Link color="blue" {...restProps} />
      </RemixLink>
    );
  },
  hr: (props: PropsWithChildren) => (
    <Separator size="4" {...props} my="6" style={{ marginInline: 'auto' }} />
  ),
  ul: (props) => {
    return <ul {...props} className={styles.List} />;
  },
  ol: ({ children, ...props }: PropsWithChildren) => {
    return (
      <Box {...props} mb="3" pl="4" asChild>
        <ol>{children}</ol>
      </Box>
    );
  },
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
  pre: (props: PropsWithChildren) => {
    return <Pre {...props} />;
  },
  code: (props: PropsWithChildren) => {
    // console.log(props);
    const isInline = typeof props.children === 'string';
    if (isInline) {
      return <Code {...props} />;
    }
    return <code {...props} />;
  },
  kbd: (props: PropsWithChildren) => <Kbd {...props} />,
  figcaption: (
    props: PropsWithChildren<{
      'data-rehype-pretty-code-title'?: '';
    }>
  ) => {
    if ('data-rehype-pretty-code-title' in props) {
      const { children, ...restProps } = props;
      return (
        <figcaption {...restProps}>
          <Flex mb="-7" width="auto" p="2">
            <Text
              size="1"
              style={{
                color: 'var(--slate-a11)',
                backgroundColor: 'var(--slate-2)',
                boxShadow: '0 0 0 1px var(--slate-a5)',
                borderRadius: 'var(--radius-2)',
                padding: 'var(--space-1) var(--space-2)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <code>{children}</code>
            </Text>
          </Flex>
        </figcaption>
      );
    }
    console.log(props);
    return <figcaption {...props} />;
  }
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
