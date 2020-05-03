## {{enum.name}}

{{#if enum.comment.shortText~}}
  {{replaceLinks enum.comment.shortText}}
{{~/if}}

{{#if enum.comment.text}}{{replaceLinks enum.comment.text}}{{/if}}

|Name|Description
|----|-----------
{{#each enum.children }}
| {{defaultValue}}|{{replaceLinks (noBreak comment.shortText)}}|
{{/each}}
