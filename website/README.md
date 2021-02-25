# DayPicker website

- Temporary website: http://react-day-picker-next.netlify.app

Built using [Docusaurus 2](https://v2.docusaurus.io/) and the [typedoc plugin](https://github.com/tgreyuk/typedoc-plugin-markdown).

```
$ yarn develop
```

#### Notes

- All the docs are placed in the [`docs`](./docs) dir, however some are copied
  from the package using the [`copy-docs`](../scripts/copy-docs.sh) script.
- To add live examples, use the special include syntax, handled by `src/theme/CodeBlock`.

````
```include
examples/filename.tsx
```
````
