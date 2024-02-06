import { Box, Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

export function PreviewBox(
  props: PropsWithChildren<{ preview?: React.ReactNode }>,
) {
  return (
    <>
      {props.children}
      <Flex justify="center" mb="5">
        {props.preview}
      </Flex>
    </>
  );
}
