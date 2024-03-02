import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu } from "@radix-ui/themes";

import v9PackageJson from "react-day-picker/package.json" assert { type: "json" };

import { useVersion } from "@/lib/versions";
import { usePathname, useRouter } from "next/navigation";

export function VersionDropdown() {
  const { version, setVersion } = useVersion();
  const pathName = usePathname() ?? "";
  const router = useRouter();

  const handleLatestClick = () => {
    setVersion("main");
    if (pathName.includes("/api")) {
      router.push("/api/main");
    }
  };
  const handleNextClick = () => {
    setVersion("next");
    if (pathName.includes("/api")) {
      router.push("/api/next");
    }
  };

  const pkgVersion = version === "main" ? "8" : v9PackageJson.version;
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button
          variant="surface"
          aria-label="Version"
          aria-description={`You are currently on the documentation for version ${pkgVersion}. Press the Down key to choose the documentation for another version`}
        >
          v{pkgVersion}
          <ChevronDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item
          shortcut={"8"}
          onClick={handleLatestClick}
          aria-description="Press Enter to choose this version"
        >
          Latest Version
        </DropdownMenu.Item>
        <DropdownMenu.Item
          shortcut={v9PackageJson.version}
          onClick={handleNextClick}
          aria-description="Press Enter to choose this version"
        >
          Next Version
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
