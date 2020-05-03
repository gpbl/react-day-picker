## {{prop.name}}

{{#if prop.shortText~}}
  {{replaceInternalLinks prop.shortText}}
{{~/if}}

{{> syntax kind="prop" name=prop.name optional=true type=prop.type }}

{{#if prop.text}}{{replaceInternalLinks prop.text}}{{/if}}
