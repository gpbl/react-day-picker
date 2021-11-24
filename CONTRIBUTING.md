# Contributing to DayPicker

You are welcome to join the [DayPicker
contributors](https://github.com/gpbl/react-day-picker/graphs/contributors),
help us building the best date picker for React.

There are many ways to help the development of DayPicker:

- Improve our build tools and Github actions
- Opening PRs with new features, bug fixes and improved rendering performance
- Align the source code to the latest Typescript / React practices
- Helping with unit and integration tests
- Proofreading [our website](http://react-day-picker-next.netlify.app) and the
  code documentation in the source files
- Making the website more stylish
- Help maintaining [the repository](https://github.com/gpbl/react-day-picker) on Github and triaging issues and PRs
- Answering our [support questions](https://github.com/gpbl/react-day-picker/discussions/categories/support)
- [Sponsoring the project](https://github.com/sponsors/gpbl)

[Send a
message](https://github.com/gpbl/react-day-picker/discussions)
in our discussions page to present yourself, or write the maintainer directly at
[io@gpbl.dev](mailto:io@gpbl.dev).

## Working with the source code

This repository works with [Yarn workspaces](https://yarnpkg.com/features/workspaces) enabled.

- `./package/react-day-picker`: this workspace contains the DayPicker source code and the development tools
- `./website`: the [Docusaurus](http://v2.docusaurus.io) app for [the documentation website](http://react-day-picker-next.netlify.app)

```
$ git clone git@github.com:gpbl/react-day-picker.git
$ cd react-day-picker
$ yarn install
```

### Developing

To build and start watching the source run the `develop` script:

```
$ yarn workspace react-day-picker develop
```

To run the unit tests in watch mode:

```
$ yarn workspace react-day-picker test --watch
```
