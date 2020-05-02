# {{name}}

{{shortText}}

{{text}}

## Props

{{#each props}}

### {{this.name}}

{{#if this.shortText}}{{this.shortText}}{{/if}}

|Type|Required|Default|   |   |
|---|---|---|---|---|
|{{this.type}}|   |   |   |   |

{{#if this.text}}{{this.text}}{{/if}}

{{/each}}
