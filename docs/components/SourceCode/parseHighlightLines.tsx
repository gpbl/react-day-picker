export function parseHighlightLines(value: string): number[] {
  const parts = value.split(',');
  let lines: number[] = [];

  parts.forEach((part) => {
    if (part.includes('-')) {
      const [start, end] = part.split('-').map(Number);
      lines = lines.concat(
        Array.from({ length: end - start + 1 }, (_, i) => start + i)
      );
    } else {
      lines.push(Number(part));
    }
  });

  return lines;
}
