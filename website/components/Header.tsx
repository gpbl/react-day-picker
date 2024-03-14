"use client";

import NextLink from "next/link";

import { useVersion } from "@/lib/versions";
import {
  Cross1Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, IconButton, Link, Text } from "@radix-ui/themes";

import { useSidebar } from "@/lib/sidebar";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

import styles from "./Header.module.css";

export function Header() {
  return (
    <Flex
      position="fixed"
      className="left-0 right-0 top-0 z-30 h-header overflow-auto border-b bg-page-background pe-4 ps-4"
      style={{ borderColor: "var(--gray-a5)" }}
      asChild
    >
      <nav>
        {/* Logo and hamburger menu */}
        <Flex
          align="center"
          gap="4"
          wrap="nowrap"
          className="fixed left-0 top-0 h-header bg-page-background px-4 md:static md:w-1/3 md:px-0"
        >
          <HamburgerButton />
          <HeaderLogo />
        </Flex>

        <Flex
          align="center"
          justify={{ initial: "end", md: "center" }}
          px="6"
          gap={{ initial: "1", md: "4" }}
          className="ms-32 h-full w-full md:ms-0 md:w-1/3"
        >
          <HeaderLinks />
        </Flex>

        <Flex align="center" justify="end" gap="4" className="h-full md:w-1/3">
          <HeaderExternalLinks />
        </Flex>
      </nav>
    </Flex>
  );
}
function HamburgerButton() {
  const sidebar = useSidebar();

  return (
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
  );
}

function HeaderLogo() {
  return (
    <Flex asChild gap="2" align="center">
      <NextLink href="/" aria-label="React DayPicker">
        <Box display={{ initial: "none", lg: "inline" }}>
          <Logo />
        </Box>
        <Text size="4">
          <Box display={{ initial: "none", xs: "inline" }}>React</Box>{" "}
          <b>DayPicker</b>
        </Text>
      </NextLink>
    </Flex>
  );
}

function HeaderExternalLinks() {
  return (
    <>
      <GitHub />
      <ThemeToggle />
    </>
  );
}

function HeaderLinks() {
  const pathname = usePathname();
  const isPlayground = pathname?.startsWith("/playground");
  const isApi = pathname?.startsWith("/api");
  const isDocs = !isPlayground && !isApi;

  return (
    <Flex gap="2">
      <Box className={styles.HeaderLink} data-active={isDocs}>
        <Link asChild>
          <NextLink href="/">Docs</NextLink>
        </Link>
      </Box>
      <Box className={styles.HeaderLink} data-active={isApi}>
        <Link asChild>
          <NextLink href="/api/latest">API</NextLink>
        </Link>
      </Box>
      <Box className={styles.HeaderLink} data-active={isPlayground}>
        <Link asChild className={styles.HeaderLink}>
          <NextLink href="/playground">Playground</NextLink>
        </Link>
      </Box>
    </Flex>
  );
}

function GitHub() {
  const { version } = useVersion();
  const href = `http://github.com/gpbl/react-day-picker${version === "latest" ? "" : "/tree/next"}`;
  return (
    <IconButton
      aria-label="Open DayPicker on GitHub"
      asChild
      variant="ghost"
      color="gray"
    >
      <a href={href} target="_blank" rel="noreferrer">
        <GitHubLogoIcon width="18" height="18" />
      </a>
    </IconButton>
  );
}
