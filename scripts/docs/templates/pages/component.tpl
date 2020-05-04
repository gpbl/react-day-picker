---
id: {{toLowerCase name}}
title: {{name}}
sidebar_label: {{name}}
---
<a id="docs"></a>

{{replaceLinks comment.shortText}}

{{#if text}}{{replaceLinks comment.text}}{{/if}}

<a id="props"></a>

<h2>{{name}} props</h2>

{{#each props }}

{{> prop this}}

{{/each}}
