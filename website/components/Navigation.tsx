"use client";
import { Link } from "@radix-ui/themes";
import NextLink from "next/link";

export function Navigation() {
  return (
    <>
      <Link asChild size="2">
        <NextLink href={"/docs"} aria-description="Open the DayPicker guides">
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
    </>
  );
}
