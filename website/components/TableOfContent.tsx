import { Link, Text } from "@radix-ui/themes";
import { Toc, TocEntry } from "@stefanprobst/rehype-extract-toc";
import { useId } from "react";
export function TableOfContent(props: { toc: Toc }) {
  const headingId = useId();

  return (
    <nav aria-labelledby={headingId}>
      <Text asChild size="2" color="gray" className="pb-3" weight="bold">
        <h3 id={headingId}>Table of Contents</h3>
      </Text>
      {renderToc(props.toc, 3)}
    </nav>
  );
}

function TocEntry({ entry, maxDepth }: { entry: TocEntry; maxDepth?: number }) {
  return (
    <li key={entry.id} className={`my-1 ${entry.depth > 2 ? "mx-4" : ""}`}>
      <Text asChild size="1">
        <Link href={`#${entry.id}`}>{entry.value}</Link>
      </Text>
      {entry.children && renderToc(entry.children, maxDepth)}
    </li>
  );
}

function renderToc(toc: Toc, maxDepth?: number) {
  return (
    <ul>
      {toc
        .filter((entry) => !maxDepth || entry.depth <= maxDepth)
        .map((entry) => (
          <TocEntry key={entry.id} entry={entry} maxDepth={maxDepth} />
        ))}
    </ul>
  );
}
