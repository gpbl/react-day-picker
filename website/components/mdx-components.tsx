/* eslint-disable no-console */
import { PropsWithChildren } from "react";

import type { MDXComponents } from "mdx/types";
import NextLink from "next/link";
import { DayPicker } from "react-day-picker";

import { CodeBlock } from "@/components/CodeBlock";
import { LinkHeading } from "@/components/LinkHeading";
import { Steps } from "@/components/Steps";
import codeBlockStyles from "@/components/codeBlockStyles.module.css";
import listStyles from "@/components/listStyles.module.css";
import tableStyles from "@/components/tableStyles.module.css";

import * as Examples from "@/examples";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import {
  Blockquote,
  Box,
  Card,
  Code,
  Em,
  Flex,
  Grid,
  Heading,
  Kbd,
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
  Grid,
  Box,
  Tabs: Tabs.Root,
  TabsList: Tabs.List,
  TabsContent: Tabs.Content,
  TabsTrigger: Tabs.Trigger,

  Callout,
  LinkCard,

  // HTML components
  a: function a(props) {
    const { href = "", ...restProps } = props;
    const isExternal = href.startsWith("http");

    return (
      <Text
        color="indigo"
        asChild
        style={{
          textDecoration: "underline",
          textDecorationStyle: "solid",
          textUnderlineOffset: "0.2em",
        }}
      >
        <NextLink
          {...restProps}
          href={!isExternal ? href.replace(/.mdx?$/, "") : href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener" : undefined}
          ref={undefined}
          aria-description={isExternal ? "(opens in a new tab)" : undefined}
        >
          {props.children}
          {isExternal && (
            <Box display="inline-block" asChild ml="1">
              <ExternalLinkIcon aria-hidden />
            </Box>
          )}
        </NextLink>
      </Text>
    );
  },

  blockquote: (props) => (
    <Blockquote size="3" my="3">
      {props.children}
    </Blockquote>
  ),

  code: function code(props: JSX.IntrinsicElements["code"]) {
    const isInline = typeof props.children === "string";
    if (isInline) {
      return <Code>{props.children}</Code>;
    }
    return <code {...props}>{props.children}</code>;
  },

  em: (props) => <Em>{props.children}</Em>,

  div: function div(props) {
    const { children, ...restProps } = props;
    if ("data-rehype-pretty-code-title" in props) {
      return (
        <div {...restProps} className={codeBlockStyles.figcaption}>
          <CodeBlockTitle>{children}</CodeBlockTitle>
        </div>
      );
    }
    return <div {...restProps}>{children}</div>;
  },

  figcaption: function figcaption(props) {
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
          <Flex justify="center" py="4">
            <Component />
          </Flex>
        );
      }
      if (process.env.NODE_ENV === "development") {
        console.warn(`Rendering caption is not supported yet.`);
      }
      return <></>;
    }

    // Add the filename or the title to the code
    if ("data-rehype-pretty-code-title" in props) {
      const { children, ...restProps } = props;
      return (
        <figcaption {...restProps} className={codeBlockStyles.figcaption}>
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

  h2: (props) => {
    const { children, id } = props;
    return (
      <Heading asChild size="7" mt="6" mb="4" id={id}>
        <h2>{id ? <LinkHeading id={id}>{children}</LinkHeading> : children}</h2>
      </Heading>
    );
  },

  h3: (props) => {
    const { children, id } = props;
    return (
      <Heading asChild size="5" mt="8" mb="3" id={id}>
        <h3>{id ? <LinkHeading id={id}>{children}</LinkHeading> : children}</h3>
      </Heading>
    );
  },

  h4: (props) => (
    <Heading asChild size="4" mt="6" mb="3">
      <h4 {...props} />
    </Heading>
  ),

  hr: () => <Separator size="4" my="6" style={{ marginInline: "auto" }} />,

  img: (props: JSX.IntrinsicElements["img"]) => (
    <Box my="6">
      {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
      <img {...props} className="max-w-full align-middle" />
    </Box>
  ),

  kbd: (props) => <Kbd>{props.children}</Kbd>,

  li: (props) => <li className={listStyles.li} {...props} />,

  ol: (props) => <ol className={listStyles.ul} {...props} />,

  p: (props) => (
    <Text as="p" my="4">
      {props.children}
    </Text>
  ),

  pre: (props) => {
    return (
      <Box
        p="4"
        my="6"
        mx="auto"
        className="overflow-auto rounded-md border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
        style={{
          backgroundColor: "var(--slate-a2)",
        }}
      >
        <Text size="2" asChild>
          <pre {...props} />
        </Text>
      </Box>
    );
  },

  strong: (props) => <Strong>{props.children}</Strong>,

  ul: (props) => <ul {...props} className={listStyles.ul} />,

  table: (props) => (
    <Table.Root className={tableStyles.Table}>{props.children}</Table.Root>
  ),
};

function CodeBlockTitle(props: PropsWithChildren) {
  return (
    <Box pt="4" px="4">
      <Text size="1">
        <code>./{props.children}</code>
      </Text>
    </Box>
  );
}
