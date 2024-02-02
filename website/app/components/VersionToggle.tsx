import { Button, DropdownMenu } from '@radix-ui/themes';
import { ChevronDownIcon } from '@radix-ui/react-icons';
export function VersionToggle() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          v9.0.next
          <ChevronDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>v9.0.0</DropdownMenu.Item>
        <DropdownMenu.Item>v8.0.0</DropdownMenu.Item>
        <DropdownMenu.Item>v7.0.0</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
