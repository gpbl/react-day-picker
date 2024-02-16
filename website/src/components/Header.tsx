"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { clx } from "@/lib/clx";
import { useVersion } from "@/lib/version";
import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Text, Tooltip } from "@radix-ui/themes";

import styles from "./Header.module.css";
import { HeaderLink } from "./HeaderLink";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { VersionToggle } from "./VersionToggle";
import { PropsWithChildren } from "react";

export function Header(props: PropsWithChildren) {
  const pathName = usePathname() ?? "";
  const { version } = useVersion();

  return (
    <div className={clx(styles.HeaderRoot)}>
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
            href="/docs"
            active={
              !pathName.startsWith("/docs/api") && pathName.startsWith("/docs")
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
          {props.children}

          <VersionToggle />
          <Tooltip content="View DayPicker on GitHub ">
            <IconButton asChild size="3" variant="ghost" color="gray">
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
                // open menu
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
