### {{name}}
{{#if comment.shortText~}}
  {{replaceLinks comment.shortText}}
{{~/if}}

{{> syntax prefix="prop" name=name flags=flags type=type }}

<hr />

{{#if comment.text}}{{replaceLinks comment.text}}{{/if}}
