"use client";

import NextLink from "next/link";

import { useVersion } from "@/lib/versions";
import {
  Cross1Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Flex, IconButton, Text } from "@radix-ui/themes";

import { useSidebar } from "@/lib/sidebar";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";
import { VersionDropdown } from "./VersionDropdown";

export function Header() {
  const { version } = useVersion();
  const sidebar = useSidebar();

  return (
    <Flex
      position="fixed"
      className="left-0 right-0 top-0 z-30 h-header border-b bg-page-background pl-4"
      style={{
        borderColor: "var(--gray-a5)",
        paddingInlineStart: "1rem",
      }}
      asChild
    >
      <nav>
        {/* Logo and hamburger menu */}

        <Flex
          position="absolute"
          align="center"
          gap="4"
          wrap="nowrap"
          className="h-header"
          width={{ initial: "100%", sm: "auto" }}
        >
          <IconButton
            size="3"
            className="xl:hidden"
            variant="ghost"
            onClick={() => sidebar.setIsOpen(!sidebar.isOpen)}
            aria-label="Toggle sidebar"
            aria-controls={sidebar.id}
            aria-expanded={sidebar.isOpen}
          >
            {sidebar.isOpen ? (
              <Cross1Icon width="22" height="22" />
            ) : (
              <HamburgerMenuIcon width="22" height="22" />
            )}
          </IconButton>
          <Flex asChild gap="2">
            <NextLink
              href="/"
              aria-label="React DayPicker"
              aria-description="Goes to the home page"
            >
              <Text size="4">
                React <b>DayPicker</b>
              </Text>
            </NextLink>
          </Flex>
        </Flex>

        <Flex
          display={{ initial: "none", md: "flex" }}
          width="100%"
          mx="auto"
          align="center"
          justify="center"
          className="h-header max-w-article-max-w"
          gap={{ sm: "4", md: "8" }}
        >
          <Navigation />
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
          <Flex
            align="center"
            gap="4"
            display={{ initial: "flex", xs: "flex" }}
          >
            <div className="hidden sm:inline-block">
              <VersionDropdown />
            </div>
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
                <GitHubLogoIcon width="22" height="22" />
              </a>
            </IconButton>
            <ThemeToggle />
          </Flex>
        </Flex>
      </nav>
    </Flex>
  );
}
