import { Doc } from "@/lib/docs";
import { Heading, Text } from "@radix-ui/themes";

export function DocHeader({ doc }: { doc: Doc }) {
  return (
    <header>
      {doc.section && (
        <Text
          as="p"
          size="4"
          style={{ color: "var(--accent-a9)" }}
          weight="bold"
          mb="2"
        >
          {doc.section}
        </Text>
      )}
      {doc.title && (
        <Heading as="h1" size="8" mb="3">
          {doc.title}
        </Heading>
      )}
      {doc.description && (
        <Text as="p" size="5" mt="2" color="gray">
          {doc.description}
        </Text>
      )}
    </header>
  );
}
