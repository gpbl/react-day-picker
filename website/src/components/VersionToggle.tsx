import { Button, DropdownMenu } from "@radix-ui/themes";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import v8PackageJson from "react-day-picker-v8/package.json" assert { type: "json" };
import v9PackageJson from "react-day-picker/package.json" assert { type: "json" };

import { useVersion } from "@/utils/VersionContext";
import { usePathname, useRouter } from "next/navigation";

export function VersionToggle() {
  const { version, setVersion } = useVersion();
  const pathName = usePathname() ?? "";
  const router = useRouter();

  const handleLatestClick = () => {
    setVersion("main");
    if (pathName.includes("/api")) {
      router.push("/docs/api/main");
    }
  };
  const handleNextClick = () => {
    setVersion("next");
    if (pathName.includes("/api")) {
      router.push("/docs/api/next");
    }
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          v{version === "main" ? v8PackageJson.version : v9PackageJson.version}
          <ChevronDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item
          shortcut={v8PackageJson.version}
          onClick={handleLatestClick}
        >
          Latest Version
        </DropdownMenu.Item>
        <DropdownMenu.Item
          shortcut={v9PackageJson.version}
          onClick={handleNextClick}
        >
          Next Version
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
