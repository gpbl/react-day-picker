---
id: {{toLowerCase name}}
title: {{name}}
sidebar_label: {{name}}
---
<a id="docs"></a> {{!-- Used by custom.css --}}

{{replaceInternalLinks shortText}}

{{#if text}}{{replaceInternalLinks text}}{{/if}}

<a id="props"></a>

# {{name}} props

{{#each props }}

{{> prop prop=this}}

{{/each}}
