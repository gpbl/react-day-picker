"use client";
import { Link } from "@radix-ui/themes";
import NextLink from "next/link";

export function Navigation() {
  return (
    <>
      <Link asChild size="2">
        <NextLink
          href={"/start"}
          aria-description="Open the DayPicker documentation"
        >
          Documentation
        </NextLink>
      </Link>
      <Link asChild size="2">
        <NextLink
          href="/api/latest"
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
