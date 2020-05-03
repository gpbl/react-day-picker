---
id: {{toLowerCase name}}
title: {{name}}
sidebar_label: {{name}}
---
<a id="docs"></a> {{!-- Used by custom.css --}}

{{replaceLinks comment.shortText}}

{{#if text}}{{replaceLinks comment.text}}{{/if}}

<a id="props"></a>

# {{name}} props

{{#each props }}

{{> prop this}}

{{/each}}
