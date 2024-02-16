import { Text } from "@radix-ui/themes";
import Link from "next/link";

export function LinkCard(props: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={props.href}>
      <Text>{props.title} || x</Text>
      <Text>{props.description}</Text>
    </Link>
  );
}
