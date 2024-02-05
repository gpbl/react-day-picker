"use client";

import Link from "next/link";

import { classNames } from "@/utils/classNames";
import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Text, Tooltip } from "@radix-ui/themes";

import styles from "./Header.module.css";
import { HeaderLink } from "./HeaderLink";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { VersionToggle } from "./VersionToggle";
import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useVersion } from "@/utils/VersionContext";

export interface HeaderProps {
  children?: ReactNode;
  gitHubLink?: string;
  ghost?: boolean;
}

type ScrollState = "at-top" | "scrolling-up" | "scrolling-down";

export function Header({ children, gitHubLink, ghost }: HeaderProps) {
  const pathName = usePathname() ?? "";
  const { version } = useVersion();
  const [scrollState, setScrollState] = useState<ScrollState>("at-top");

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const direction =
        previousScrollY < window.scrollY ? "scrolling-down" : "scrolling-up";
      const state = window.scrollY < 30 ? "at-top" : direction;
      previousScrollY = window.scrollY;
      setScrollState(state);
    };

    if (ghost) {
      addEventListener("scroll", handleScroll, { passive: true });
    } else {
      removeEventListener("scroll", handleScroll);
    }

    handleScroll();
    return () => removeEventListener("scroll", handleScroll);
  }, [ghost]);

  return (
    <div
      data-scroll-state={scrollState}
      data-mobile-menu-open={false}
      className={classNames(styles.HeaderRoot, ghost ? styles.ghost : "")}
    >
      <div className={styles.HeaderInner}>
        <Flex
          display={{ xs: "none" }}
          align="center"
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          pl="4"
        >
          <Link href="/">
            <Logo />
            <Text style={{ fontSize: "var(--font-size-4)" }}>React</Text>
            <Text weight="bold">DayPicker</Text>
          </Link>
        </Flex>

        <Flex
          display={{ initial: "none", xs: "flex" }}
          align="center"
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          pl="4"
        >
          <Link href="/">
            <Flex gap="3" align="center">
              <Logo />
              <Text size="5">
                React <b>DayPicker</b>
              </Text>
            </Flex>
          </Link>
        </Flex>

        <div className={styles.HeaderLinksContainer}>
          <HeaderLink
            href="/"
            active={
              !pathName.startsWith("/docs/api") &&
              (pathName.startsWith("/docs") || pathName === "/")
            }
          >
            Documentation
          </HeaderLink>
          <HeaderLink
            href={`/docs/api/${version}`}
            active={pathName.startsWith("/docs/api")}
          >
            API Reference
          </HeaderLink>
          <HeaderLink
            href="/playground"
            active={pathName.startsWith("/playground")}
          >
            Playground
          </HeaderLink>
          <HeaderLink
            href="/examples"
            active={pathName.startsWith("/examples")}
          >
            Examples
          </HeaderLink>
        </div>

        <Flex
          display={{ initial: "none", md: "flex" }}
          align="center"
          gap="4"
          position="absolute"
          top="0"
          bottom="0"
          right="0"
          pr="4"
        >
          {children}

          <VersionToggle />
          {gitHubLink && (
            <Tooltip content="View GitHub ">
              <IconButton asChild size="3" variant="ghost" color="gray">
                <a href={gitHubLink} target="_blank" rel="noreferrer">
                  <GitHubLogoIcon width="18" height="18" />
                </a>
              </IconButton>
            </Tooltip>
          )}
          <ThemeToggle />
        </Flex>

        <Flex
          display={{ md: "none" }}
          align="center"
          gap="4"
          position="absolute"
          top="0"
          bottom="0"
          right="0"
          pr="4"
        >
          <div className={styles.HeaderThemeToggleContainer}>
            <ThemeToggle />
          </div>

          <Tooltip content="Navigation">
            <IconButton
              size="3"
              variant="ghost"
              color="gray"
              data-state={"closed"}
              onClick={() => {
                // return mobileMenu.setOpen((open: boolean) => !open);
              }}
              className={styles.MobileMenuButton}
            >
              <HamburgerMenuIcon width="18" height="18" />
            </IconButton>
          </Tooltip>
        </Flex>
      </div>
    </div>
  );
}
