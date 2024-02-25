"use client";

import NextLink from "next/link";

import { useVersion } from "@/lib/versions";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Box, Flex, IconButton, Link, Text, Tooltip } from "@radix-ui/themes";

import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { VersionDropdown } from "./VersionDropdown";

export function Header() {
  const { version } = useVersion();

  return (
    <Box
      position="fixed"
      className="left-0 right-0 top-0 z-20 h-header border-b bg-page-background"
      style={{
        // backgroundColor: "var(--color-page-background)",
        borderColor: "var(--gray-a5)",
      }}
      asChild
    >
      <nav>
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
          <NextLink
            href="/"
            aria-label="React DayPicker"
            aria-description="Goes to the home page"
          >
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
            <NextLink
              href={"/docs"}
              aria-description="Open the DayPicker guides"
            >
              Documentation
            </NextLink>
          </Link>
          <Link asChild size="2">
            <NextLink
              href={"/docs/api/main"}
              aria-description="Open the DayPicker API reference"
            >
              API reference
            </NextLink>
          </Link>
          <Link asChild size="2">
            <NextLink
              href={"/playground"}
              aria-description="Open a page for playing with the DayPicker props"
            >
              Playground
            </NextLink>
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
          <VersionDropdown />
          <Flex
            align="center"
            gap="4"
            display={{ initial: "none", xs: "flex" }}
          >
            <Tooltip content="Open DayPicker on GitHub" role="presentation">
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
            </Tooltip>
            <ThemeToggle />
          </Flex>
        </Flex>
      </nav>
    </Box>
  );
}
