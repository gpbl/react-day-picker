import { Button, DropdownMenu } from "@radix-ui/themes";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import packageJson from "react-day-picker/package.json" assert { type: "json" };

export function VersionToggle() {
  console.log(packageJson);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          {packageJson.version}
          <ChevronDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>v8.0.0</DropdownMenu.Item>
        <DropdownMenu.Item>v9.0.0</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
