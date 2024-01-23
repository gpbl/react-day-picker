export function jsdocLinksToMarkdown(description: string) {
  return (
    description.replace(
      /\{@link (.*?)\}/g,
      (match, url) => `[${url}](${url})`
    ) ?? ''
  );
}
