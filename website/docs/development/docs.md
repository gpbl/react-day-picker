# Documenting DayPicker

DayPicker is documented via the source code and markdown.

## Documenting the source code

Make sure the source code is properly documented: each function, type or interface must have a clear, concise description of what it represents.

### Generating docs from source

The website app includes a the [typedoc plugin](https://www.npmjs.com/package/docusaurus-plugin-typedoc) to generate docs from source. These docs are stored in `website/docs/api` and shown in the [API reference](/api).

To generate docs from source, simply start the development environment from both the package and website.

## Writing markdown docs

Docs are placed in the `website/docs` directory in the repository.

:::info
When writing documentation for DayPicker makes sure to be as concise as possible and provide enough code examples.
:::

Read the [Docusaurus docs system](https://docusaurus.io/docs/docs-introduction) to know more about the supported markdown syntax.

## Adding code examples

A code example is a small app displaying the DayPicker functionality.

Documentation examples are placed in the `/examples` directory.

- examples should contain one component exported as `default`
- each example must be unit tested

### Including examples into markdown

They can be included into a markdown doc using a code block with `include`:

````
```include
start.tsx
```
````

The `include` prism "language" is parsed by the custom [CodeBlock component](https://github.com/gpbl/react-day-picker/blob/master/website/src/theme/CodeBlock). It will load the [Sandpack](https://github.com/codesandbox/sandpack) with the specified files

### Rendering examples in the browser

Opening the example in the browser is useful for testing or while developing the package.

Use the render page to open the example in the app: for instance, to render the `start.tsx` example, open [`/render?example=start.tsx`](/render?example=start.tsx).
