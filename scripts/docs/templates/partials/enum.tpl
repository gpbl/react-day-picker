## {{enum.name}}

{{#if enum.comment.shortText~}}
  {{replaceInternalLinks enum.comment.shortText}}
{{~/if}}

{{!-- {{> syntax kind="enum" name=enum.name optional=true type=enum.type }} --}}

{{#if enum.comment.text}}{{replaceInternalLinks enum.comment.text}}{{/if}}

|Name|Description
|----|-----------
{{#each enum.children }}
| {{defaultValue}}|{{replaceInternalLinks comment.shortText}}|
{{/each}}
