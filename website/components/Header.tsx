"use client";

import NextLink from "next/link";

import { useVersion } from "@/lib/version";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Box, Flex, IconButton, Link, Text } from "@radix-ui/themes";

import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { VersionToggle } from "./VersionToggle";

export function Header() {
  const { version } = useVersion();

  return (
    <Box
      position="fixed"
      className={`top-0 left-0 right-0 z-20 border-b`}
      style={{
        height: `var(--header-height)`,
        backgroundColor: "var(--color-page-background)",
        borderColor: "var(--gray-a5)",
      }}
    >
      <Flex
        align="center"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        pl="4"
        asChild
        gap="2"
        wrap="nowrap"
      >
        <NextLink href="/">
          <Logo />
          <Text style={{ fontSize: "var(--font-size-4)" }}>
            React <b>DayPicker</b>
          </Text>
        </NextLink>
      </Flex>

      <Flex
        display={{ initial: "none", sm: "flex" }}
        align="center"
        gap="4"
        justify="center"
        className="h-full"
      >
        <Link asChild size="2">
          <NextLink href={"/docs"}>Documentation</NextLink>
        </Link>
        <Link asChild size="2">
          <NextLink href={"/docs/api/main"}>API reference</NextLink>
        </Link>
        <Link asChild size="2">
          <NextLink href={"/playground"}>Playground</NextLink>
        </Link>
      </Flex>

      <Flex
        align="center"
        gap="4"
        position="absolute"
        top="0"
        bottom="0"
        right="0"
        pr="4"
      >
        <VersionToggle />

        <Flex align="center" gap="4" display={{ initial: "none", xs: "flex" }}>
          <IconButton
            aria-label="Open DayPicker on GitHub"
            asChild
            size="3"
            variant="ghost"
            color="gray"
          >
            <a
              href={
                version === "main"
                  ? "http://github.com/gpbl/react-day-picker"
                  : "https://github.com/gpbl/react-day-picker/tree/next"
              }
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogoIcon width="18" height="18" />
            </a>
          </IconButton>
          <ThemeToggle />
        </Flex>
      </Flex>
    </Box>
  );
}
