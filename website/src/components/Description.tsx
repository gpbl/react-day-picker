import { PropsWithChildren } from "react";
import { Text } from "@radix-ui/themes";

export function Description(props: PropsWithChildren<PropsWithChildren>) {
  const children = Array.isArray(props.children)
    ? props.children[0]
    : props.children;

  return (
    <Text as="p" size="5" mt="2" mb="2" color="gray">
      {children}
    </Text>
  );
}
