import { Flex, Select, Text } from "@radix-ui/themes";
import { useState } from "react";
import { DayPicker, type CaptionLayout } from "react-day-picker";

export function CaptionLayout() {
  const [captionLayout, setCaptionLayout] = useState<CaptionLayout>("dropdown");

  return (
    <Flex direction="column" gap="2" align="center">
      <Flex gap="2" align="center">
        <Text as="label" size="2">
          Caption Layout:
        </Text>
        <Select.Root
          defaultValue="off"
          value={captionLayout?.toString()}
          onValueChange={(value) => {
            return setCaptionLayout(value as CaptionLayout);
          }}
        >
          <Select.Trigger></Select.Trigger>
          <Select.Content>
            <Select.Item value="buttons">buttons</Select.Item>
            <Select.Item value="dropdown">dropdown</Select.Item>
            <Select.Item value="dropdown-buttons">dropdown-buttons</Select.Item>
          </Select.Content>
        </Select.Root>
      </Flex>
      <DayPicker captionLayout={captionLayout} fromYear={2010} toYear={2024} />
    </Flex>
  );
}
