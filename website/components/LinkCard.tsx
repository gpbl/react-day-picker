import { Card, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

export function LinkCard(props: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Card asChild size="2">
      <Link href={props.href}>
        <Heading aria-level={4} size="3" color="indigo">
          {props.title}
        </Heading>
        <Text size="2" my="1" as="p" color="gray">
          {props.description}
        </Text>
      </Link>
    </Card>
  );
}
