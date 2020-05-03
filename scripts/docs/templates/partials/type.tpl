{{~#ifEquals type "intrinsic"~}}
{{~linkType this~}}
{{~/ifEquals~}}
{{#ifEquals type "reference"~}}
{{~linkType this~}}
{{~/ifEquals~}}
{{~#ifEquals type "array"~}}
[{{~>type elementType}}]
{{~/ifEquals~}}

{{~#ifEquals type "reflection"~}}
indexed
{{~/ifEquals~}}
