import { PropsWithChildren } from "react";

import type { MDXComponents } from "mdx/types";
import NextLink from "next/link";
import { DayPicker } from "react-day-picker";

import { CodeBlock } from "@/components/CodeBlock";
import { LinkHeading } from "@/components/LinkHeading";
import { Steps } from "@/components/Steps";
import listStyles from "@/components/listStyles.module.css";
import tableStyles from "@/components/tableStyles.module.css";

import * as Examples from "@/examples";

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
  Table,
  Tabs,
  Text,
} from "@radix-ui/themes";
import { Callout } from "./Callout";
import { LinkCard } from "./LinkCard";

/** All the components used to generate the MDX pages. */
export const components: MDXComponents = {
  DayPicker,

  // All examples are available under `Examples` to consume in the docs
  Examples,

  // Custom components
  CodeBlock: CodeBlock,
  Steps,

  // Radix UI components
  Text,
  Flex,
  Card,
  Box,
  Tabs: Tabs.Root,
  TabsList: Tabs.List,
  TabsContent: Tabs.Content,
  TabsTrigger: Tabs.Trigger,

  Callout,
  LinkCard,

  // HTML components
  a: function a(
    props: PropsWithChildren<{ href?: string; id?: string; name?: string }>,
  ) {
    const { href = "", ...restProps } = props;

    if (href.startsWith("http")) {
      return (
        <Link
          {...restProps}
          style={{
            textDecoration: "underline",
            textDecorationColor: "currentcolor",
          }}
          href={href}
          target="_blank"
          rel="noopener"
        />
      );
    }

    return (
      <Link
        asChild
        style={{
          textDecoration: "underline",
          textDecorationColor: "currentcolor",
        }}
      >
        <NextLink href={href.replace(/.mdx?$/, "")} {...restProps}></NextLink>
      </Link>
    );
  },

  blockquote: (props: PropsWithChildren) => (
    <Blockquote size="3" my="3" {...props} />
  ),

  code: function code(props: JSX.IntrinsicElements["code"]) {
    const isInline = typeof props.children === "string";
    if (isInline) {
      return <Code>{props.children}</Code>;
    }
    return <code {...props}>{props.children}</code>;
  },

  em: (props: PropsWithChildren) => <Em {...props} />,

  div: function div(props: PropsWithChildren) {
    const { children, ...restProps } = props;
    if ("data-rehype-pretty-code-title" in props) {
      return (
        <div {...restProps}>
          <CodeBlockTitle>{props.children}</CodeBlockTitle>
        </div>
      );
    }
    return <div {...restProps}>{children}</div>;
  },
  figcaption: function figcaption(
    props: PropsWithChildren<{
      "data-rehype-pretty-code-title"?: "";
      "data-rehype-pretty-code-caption"?: "";
    }>,
  ) {
    if ("data-rehype-pretty-code-caption" in props) {
      const caption = props.children as string;
      if (caption.startsWith("render")) {
        const [, ExampleName] = caption.split(":");
        // eslint-disable-next-line import/namespace
        const Component = Examples[ExampleName as keyof typeof Examples];
        if (!Component) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`No example found for "${ExampleName}"`);
          }
          return <></>;
        }
        return (
          <Flex justify="center">
            <Component />
          </Flex>
        );
      }
      if (process.env.NODE_ENV === "development") {
        console.warn(`Rendering caption is not supported yet.`);
      }
      return <></>;
    }
    if ("data-rehype-pretty-code-title" in props) {
      // Add the filename or the title to the code
      const { children, ...restProps } = props;
      return (
        <figcaption {...restProps}>
          <CodeBlockTitle>{children}</CodeBlockTitle>
        </figcaption>
      );
    }
    return <figcaption {...props} />;
  },
  h1: (props) => (
    <Heading asChild size="8" mb="3">
      <h1 {...props} />
    </Heading>
  ),

  h2: (props: PropsWithChildren<{ id?: string }>) => {
    const { children, id } = props;
    return (
      <Heading asChild size="7" mt="9" mb="5" {...props} id={id} data-heading>
        <h2>{id ? <LinkHeading id={id}>{children}</LinkHeading> : children}</h2>
      </Heading>
    );
  },

  h3: (props: PropsWithChildren<{ id?: string }>) => {
    const { children, id } = props;
    return (
      <Heading asChild size="5" mt="8" mb="3" {...props} id={id} data-heading>
        <h3>{id ? <LinkHeading id={id}>{children}</LinkHeading> : children}</h3>
      </Heading>
    );
  },
  h4: (props: PropsWithChildren) => (
    <Heading asChild size="4" mt="6" mb="3">
      <h4 {...props} />
    </Heading>
  ),
  hr: (props: PropsWithChildren) => (
    <Separator size="4" my="6" {...props} style={{ marginInline: "auto" }} />
  ),
  img: (props: JSX.IntrinsicElements["img"]) => (
    <Box my="6">
      {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
      <img {...props} className="max-w-full align-middle" />
    </Box>
  ),
  kbd: (props: PropsWithChildren) => <Kbd {...props} />,
  li: (props: PropsWithChildren) => (
    <li className={listStyles.li}>
      <Text {...props} />
    </li>
  ),

  ol: (props: PropsWithChildren) => <ol className={listStyles.ul} {...props} />,
  p: (props: PropsWithChildren) => <Text as="p" my="4" {...props} />,
  pre: (props: PropsWithChildren) => {
    return (
      <Box
        p="4"
        my="2"
        mb="8"
        mx="auto"
        className="overflow-auto rounded-md border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
        style={{
          // boxShadow: "0 0 0 1px var(--slate-a5)",
          // borderRadius: "var(--radius-2)",
          fontSize: "var(--font-size-2)",
          backgroundColor: "var(--slate-a2)",
        }}
      >
        <pre {...props} />
      </Box>
    );
  },
  strong: (props: PropsWithChildren) => <Strong {...props} />,
  ul: (props: PropsWithChildren) => <ul {...props} className={listStyles.ul} />,
  table: (props: PropsWithChildren) => (
    <Table.Root className={tableStyles.Table} {...props}>
      {props.children}
    </Table.Root>
  ),
};

function CodeBlockTitle(props: PropsWithChildren) {
  return (
    <Flex mt="-2">
      <Text
        size="1"
        style={{
          backgroundColor: "var(--slate-2)",
          border: "1px solid var(--slate-a4)",
          borderTopLeftRadius: "var(--radius-2)",
          borderTopRightRadius: "var(--radius-2)",
          padding: "var(--space-1) var(--space-2)",
          transform: "translateY(calc(1em - 3px)) translateX(1em)",
          borderBottom: 0,
          minWidth: "120px",
          paddingBlock: "var(--space-1) var(--space-2)",
          fontWeight: "bold",
        }}
      >
        {props.children}
      </Text>
    </Flex>
  );
}
