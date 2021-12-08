# Working with the source

The DayPicker monorepo works together with [Yarn workspaces](https://yarnpkg.com/features/workspaces):

- `./package/react-day-picker`: this workspace contains the DayPicker source code and the development tools
- `./website`: the [Docusaurus](http://v2.docusaurus.io) app for [the documentation website](http://react-day-picker-next.netlify.app)

## Getting started

1. Clone the monorepo and install the dependencies

   ```
   $ git clone git@github.com:gpbl/react-day-picker.git
   $ cd react-day-picker
   $ yarn install
   ```

2. Open [react-day-picker.code-workspace](https://github.com/gpbl/react-day-picker/blob/master/react-day-picker.code-workspace) with vscode for a ready development environment.

## Development scripts

While working with the source code you will find useful these scripts:

```bash
$ yarn workspace react-day-picker typecheck-watch # start the typecheck in watch mode
$ yarn workspace react-day-picker develop         # start the build in watch mode
$ yarn workspace website start                    # start the website in watch mode
$ yarn workspace website typecheck-watch          # start the typecheck in watch mode for website
```

These can be also started all together using the `develop-all` script:

```bash
$ yarn run develop-all  # runs from the repository root
```

## Testing

In DayPicker we run unit tests and integration tests:

```bash
$ yarn workspace react-day-picker test  # run the unit tests
$ yarn workspace website test           # run the integration tests
```

Run the relative watch script to run the test in watch mode:

```bash
$ yarn workspace react-day-picker test-watch  # run the unit tests
$ yarn workspace website test-watch           # run the integration tests
```
