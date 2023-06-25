# Working with the source

The DayPicker monorepo contains two workspaces setup with [pnpm](https://pnpm.io):

- `./package/react-day-picker`: this workspace contains the DayPicker source code and the development tools
- `./website`: the [Docusaurus](http://v2.docusaurus.io) app for [the documentation website](http://react-day-picker-next.netlify.app)

## Getting started

### Prerequisites

- Node 18.16 and later. To set the version via [nvm](https://github.com/nvm-sh/nvm) run:
  ```bash
  $ nvm use
  ```
- To enable pnpm, make sure corepack is enabled:
  ```bash
  $ corepack enabled
  ```

### Setup

Clone the monorepo and install the dependencies:

```
$ git clone git@github.com:gpbl/react-day-picker.git
$ cd react-day-picker
$ pnpm
```

If you use [Visual Studio Code](https://code.visualstudio.com/), open the [react-day-picker.code-workspace](https://github.com/gpbl/react-day-picker/blob/master/react-day-picker.code-workspace) with for the development environment.

## Development scripts

While working with the source code you will find useful these scripts:

```bash
$ pnpm -F react-day-picker typecheck-watch # start the typecheck in watch mode
$ pnpm -F react-day-picker develop         # start the build in watch mode
$ pnpm -F website start                    # start the website in watch mode
$ pnpm -F website typecheck-watch          # start the typecheck in watch mode for website
```

These are configured to start when opening the vscode project. If they won't, enable _Manage Automatic Tasks In Folder_ from the <kbd>Cmd+Shift+P</kbd> menu.

## Testing

In DayPicker we run unit tests and integration tests:

```bash
$ pnpm -F react-day-picker test  # run the unit tests
$ pnpm -F website test           # run the integration tests
```

Run the relative watch script to run the test in watch mode:

```bash
$ pnpm -F react-day-picker test-watch  # run the unit tests
$ pnpm -F website test-watch           # run the integration tests
```
