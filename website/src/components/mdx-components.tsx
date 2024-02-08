/* eslint-disable no-console */
import { createContext, PropsWithChildren } from "react";

import type { MDXComponents } from "mdx/types";
import NextLink from "next/link";
import { DayPicker } from "react-day-picker";

import { Description } from "@/components/Description";
import { LinkHeading } from "@/components/LinkHeading";
import listStyles from "@/components/listStyles.module.css";
import { PreviewBox } from "@/components/PreviewBox";
import { SectionTitle } from "@/components/SectionTitle";
import { SignatureMemberIdentifier } from "@/components/SignatureMemberIdentifier";
import { Step, Steps } from "@/components/Steps";
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
import { Frontmatter } from "@/types/frontmatter";

/** All the components used to generate the MDX pages. */
export const components: MDXComponents = {
  DayPicker,

  // All examples are available under `Examples` to consume in the docs
  Examples,

  // Custom components
  PreviewBox,
  Description,
  SectionTitle,
  Steps,
  Step,

  SignatureMemberIdentifier,

  // Radix UI components
  Text,
  Card,
  Box,
  Tabs: Tabs.Root,
  TabsList: Tabs.List,
  TabsContent: Tabs.Content,
  TabsTrigger: Tabs.Trigger,

  // HTML components
  a: function a(
    props: PropsWithChildren<{ href?: string; id?: string; name?: string }>,
  ) {
    const { href = "", ...restProps } = props;

    if (href.startsWith("http")) {
      return (
        <Link
          {...restProps}
          style={{ textDecoration: "underline" }}
          href={href}
          target="_blank"
          rel="noopener"
        />
      );
    }

    return (
      <Link asChild>
        <NextLink href={href.replace(/.md$/, "")} {...restProps}></NextLink>
      </Link>
    );
  },

  blockquote: (props: PropsWithChildren) => <Blockquote {...props} />,

  code: function code(props: JSX.IntrinsicElements["code"]) {
    const isInline = typeof props.children === "string";
    if (isInline) {
      return <Code>{props.children}</Code>;
    }
    return <code {...props}>{props.children}</code>;
  },

  em: (props: PropsWithChildren) => <Em {...props} />,

  figcaption: function figcaption(
    props: PropsWithChildren<{
      "data-rehype-pretty-code-title"?: "";
      "data-rehype-pretty-code-caption"?: "";
    }>,
  ) {
    if ("data-rehype-pretty-code-caption" in props) {
      const caption = props.children as string;
      if (caption.startsWith("render:")) {
        const [, ExampleName] = caption.split(":");
        const Component = Examples[ExampleName as keyof typeof Examples];
        if (!Component) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`No example found for "${ExampleName}"`);
          }
          return <></>;
        }
        return (
          <Flex justify="center" mb="7">
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
      const { children, ...restProps } = props;
      return (
        <figcaption {...restProps} className="mt-4">
          <Flex mb="-8" width="auto" p="2">
            <Text
              size="1"
              style={{
                color: "var(--slate-a11)",
                backgroundColor: "var(--slate-2)",
                boxShadow: "0 0 0 1px var(--slate-a5)",
                borderRadius: "var(--radius-2)",
                padding: "var(--space-1) var(--space-2)",
                fontFamily: "var(--font-mono)",
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

  h1: (props) => (
    <Heading asChild size="8" mb="3">
      <h1 {...props} />
    </Heading>
  ),

  h2: (props: PropsWithChildren<{ id?: string }>) => {
    const { children, id } = props;
    return (
      <Heading asChild size="6" mt="8" mb="3" {...props} id={id} data-heading>
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
  p: (props: PropsWithChildren) => <Text mb="5" size="3" as="p" {...props} />,
  pre: (props: PropsWithChildren) => (
    <Box
      p="4"
      my="6"
      style={{
        overflow: "auto",
        boxShadow: "0 0 0 1px var(--slate-a5)",
        borderRadius: "var(--radius-2)",
        fontSize: "var(--font-size-2)",
        backgroundColor: "var(--slate-a2)",
      }}
    >
      <pre {...props} />
    </Box>
  ),
  strong: (props: PropsWithChildren) => <Strong {...props} />,
  ul: (props: PropsWithChildren) => <ul {...props} className={listStyles.ul} />,
  table: (props: PropsWithChildren) => (
    <Table.Root className={tableStyles.Table} {...props}>
      {props.children}
    </Table.Root>
  ),
};

export const FrontmatterContext = createContext<Frontmatter>({} as Frontmatter);

export function MDXProvider(
  props: PropsWithChildren<{ frontmatter: Frontmatter }>,
) {
  return (
    <FrontmatterContext.Provider value={props.frontmatter}>
      {props.children}
    </FrontmatterContext.Provider>
  );
}
