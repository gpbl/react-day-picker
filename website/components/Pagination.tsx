import { Doc } from "@/lib/docs";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Box, Card, Flex, Link, Text } from "@radix-ui/themes";

export interface PaginationProps {
  currentDoc: Doc;
  previousDoc: Doc | undefined;
  nextDoc: Doc | undefined;
}

export function Pagination(props: PaginationProps) {
  const { previousDoc, nextDoc } = props;
  const prevPageTitle = previousDoc?.navigationLabel || previousDoc?.title;
  const nextPageTitle = nextDoc?.navigationLabel || nextDoc?.title;

  return (
    <Flex asChild width="100%" gap="4" wrap="wrap-reverse">
      <section aria-label="Page navigation">
        <Box style={{ flex: "1 0 30%" }}>
          {previousDoc?.path && (
            <Card size="2" asChild variant="ghost">
              <Link
                href={"/" + previousDoc?.path}
                style={{ textDecoration: "none", whiteSpace: "nowrap" }}
                aria-label={`Previous page: ${prevPageTitle}`}
              >
                <Text as="div" align="left" color="gray" size="2">
                  <Flex align="center" justify="start" gap="1">
                    <ArrowLeftIcon />
                    Previous
                  </Flex>
                </Text>
                <Text color="indigo" as="div" weight="bold" size="3">
                  {prevPageTitle}
                </Text>
              </Link>
            </Card>
          )}
        </Box>
        <Box style={{ flex: "1 0 30%" }}>
          {nextDoc?.path && (
            <Card size="2" asChild variant="ghost">
              <Link
                href={"/" + nextDoc?.path}
                style={{ textDecoration: "none", whiteSpace: "nowrap" }}
                aria-label={`Next page: ${nextPageTitle}`}
              >
                <Text as="div" align="right" color="gray">
                  <Flex align="center" justify="end" gap="1">
                    Next
                    <ArrowRightIcon />
                  </Flex>
                </Text>
                <Text
                  color="indigo"
                  weight="bold"
                  as="div"
                  className="min-w-44"
                  align="right"
                  size="3"
                >
                  {nextPageTitle}
                </Text>
              </Link>
            </Card>
          )}
        </Box>
      </section>
    </Flex>
  );
}
