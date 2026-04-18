import type { ComponentType } from "react";
import ComponentTypes from "@theme-original/NavbarItem/ComponentTypes";

import VersionedPlaygroundNavbarItem from "./VersionedPlaygroundNavbarItem";

type NavbarItemComponentMap = Record<string, ComponentType<Record<string, unknown>>>;

export default {
  ...(ComponentTypes as NavbarItemComponentMap),
  "custom-versionedPlayground": VersionedPlaygroundNavbarItem,
};
