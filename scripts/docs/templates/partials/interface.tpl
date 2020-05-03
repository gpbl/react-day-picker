## {{name}}

{{#if comment.shortText~}}
  {{replaceLinks comment.shortText}}
{{~/if}}

<hr/>

{{!-- {{> syntax kind="enum" name=enum.name optional=true type=enum.type }} --}}

{{#if comment.text}}{{replaceLinks comment.text}}{{/if}}

{{#each children }}
<a class="interface-syntax"></a>

{{> syntax name=name flags=flags type=type prefix="prop" }}

{{replaceLinks (noBreak comment.shortText) }}

{{/each}}
