import { createContext, PropsWithChildren } from 'react';

import type { MDXComponents } from 'mdx/types';
import { DayPicker } from 'react-day-picker';

import * as Examples from '@/examples';
import { ApiDescription } from '@/components/ApiDescription';
import { ApiInternalLink } from '@/components/ApiInternalLink';
import { RenderJsx } from '@/components/RenderJsx';
import type { Frontmatter } from '@/lib/docs.server';
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

import { Description } from './Description';
import { LinkHeading } from './LinkHeading';
import listStyles from './listStyles.module.css';
import { Pre } from './Pre';
import { PreviewBox } from './PreviewBox';
import { PropsTable } from './PropsTable';
import { SectionTitle } from './SectionTitle';
import { Step, Steps } from './Steps';
import { PropsList } from './PropsList';

/** All the components used to generate the MDX pages. */
export const components = {
  DayPicker,

  // All examples are available under `Examples` to consume in the docs
  Examples,

  // Lib components
  CodeToMdx: RenderJsx,
  ApiDescription,
  ApiInternalLink,

  // Custom components
  PreviewBox,
  PropsTable,
  PropsList,
  RenderJsx,
  Description,
  SectionTitle,
  Steps,
  Step,

  // Radix UI components
  Text,
  Card,
  Box,
  Tabs: Tabs.Root,
  TabsList: Tabs.List,
  TabsContent: Tabs.Content,
  TabsTrigger: Tabs.Trigger,

  // HTML components
  a: function a(props: PropsWithChildren<{ href?: string }>) {
    const { href = '', ...restProps } = props;
    if (href.startsWith('http')) {
      return <Link {...restProps} href={href} target="_blank" rel="noopener" />;
    }
    return (
      <RemixLink to={href}>
        <Link {...restProps} />
      </RemixLink>
    );
  },

  blockquote: function blockquote(props: PropsWithChildren) {
    return <Blockquote {...props} />;
  },

  code: function code(props: JSX.IntrinsicElements['code']) {
    const isInline = typeof props.children === 'string';
    if (isInline) {
      return <Code>{props.children}</Code>;
    }
    return <code {...props}>{props.children}</code>;
  },

  em: function em(props: PropsWithChildren) {
    return <Em {...props} />;
  },

  figcaption: function figcaption(
    props: PropsWithChildren<{
      'data-rehype-pretty-code-title'?: '';
    }>
  ) {
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
    return <figcaption {...props} />;
  },

  h1: function h1(props: PropsWithChildren) {
    return (
      <Heading asChild size="8" mb="3">
        <h1 {...props} style={{ scrollMarginTop: 'var(--space-9)' }}>
          {props.children}
        </h1>
      </Heading>
    );
  },

  h2: function h2(props: PropsWithChildren<{ id?: string }>) {
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
        <h3>{id ? <LinkHeading id={id}>{children}</LinkHeading> : children}</h3>
      </Heading>
    );
  },

  h3: function h3(props: PropsWithChildren<{ id?: string }>) {
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
        <h3>{id ? <LinkHeading id={id}>{children}</LinkHeading> : children}</h3>
      </Heading>
    );
  },

  h4: function h4(props: PropsWithChildren) {
    const { children } = props;
    return (
      <Heading asChild size="4" mt="6" mb="3" {...props}>
        <h4 style={{ scrollMarginTop: 'var(--space-9)' }}>{children}</h4>
      </Heading>
    );
  },

  hr: function hr(props: PropsWithChildren) {
    return (
      <Separator size="4" {...props} my="6" style={{ marginInline: 'auto' }} />
    );
  },

  img: function img(props: JSX.IntrinsicElements['img']) {
    return (
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
    );
  },

  kbd: function kbd(props: PropsWithChildren) {
    return <Kbd {...props} />;
  },

  li: function li(props: PropsWithChildren) {
    return (
      <li className={listStyles.li}>
        <Text {...props} />
      </li>
    );
  },

  ol: function ol({ children, ...props }: PropsWithChildren) {
    return (
      <Box {...props} mb="3" pl="4" asChild>
        <ol>{children}</ol>
      </Box>
    );
  },

  p: function p(props: PropsWithChildren) {
    return <Text mb="5" as="p" size="3" {...props} />;
  },

  pre: function pre(props: PropsWithChildren) {
    return <Pre {...props} />;
  },

  strong: function strong(props: PropsWithChildren) {
    return <Strong {...props} />;
  },

  ul: function ul(props: PropsWithChildren) {
    return <ul {...props} className={listStyles.ul} />;
  }
};

export const FrontmatterContext = createContext<Frontmatter>({});
