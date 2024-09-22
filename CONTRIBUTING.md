# Contributing to DayPicker

You are welcome to join the [DayPicker contributors](https://github.com/gpbl/react-day-picker/graphs/contributors) and help us build the best date picker for React.

## Ways to Contribute

There are many ways to contribute to the development of DayPicker:

- Improve our build tools and GitHub actions
- Open PRs with new features, bug fixes, and improved rendering performance
- Align the source code with the latest TypeScript/React practices
- Help with unit and integration tests
- Proofread [our website](https://daypicker.dev/) and the code documentation in the source files
- Make the website more stylish
- Help maintain [the repository](https://github.com/gpbl/react-day-picker) on GitHub and triage issues and PRs
- Answer [support questions](https://github.com/gpbl/react-day-picker/discussions/categories/support)
- [Sponsor the project](https://github.com/sponsors/gpbl)

[Send a message](https://github.com/gpbl/react-day-picker/discussions) on our discussions page to introduce yourself!

## Working With the Source Code

DayPicker is built using the following tools and libraries:

- **[React](https://reactjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vitejs.dev/)** - for the examples app
- **[Docusaurus](https://docusaurus.io/)** - for the documentation
- **[Jest](https://jestjs.io/)** - for testing
- **[pnpm](https://pnpm.io/)** - for package management

To contribute to DayPicker, start by cloning the repository:

```sh
git clone https://github.com/gpbl/react-day-picker.git
cd react-day-picker
pnpm install
```

### DayPicker Workspace

If your are using [Visual Studio code](https://code.visualstudio.com) open the [react-day-picker.code-workspace](https://github.com/gpbl/react-day-picker/blob/main/react-day-picker.code-workspace) to set up the development environment. This workspace includes:

- Suggested extensions for the project
- TypeScript compiler running in watch mode for the ESM export
- Docusaurus website running at http://localhost:2001, with documentation and API docs
- Vite.js examples app served at http://localhost:5173
  - Use this app to run isolated test cases and examples, exported by `/examples/index.ts`

### Test Driven Development

DayPicker development is test-driven. Change code and run the tests using `pnpm run test-watch` or `pnpm run test`. The Jest plugin in the VS Code workspace is recommended for running tests.

### Useful Scripts

- To run the build in watch mode:
  ```sh
  pnpm tsc --project tsconfig-esm.json --watch
  ```
- To run the tests in watch mode:
  ```
  pnpm run test-watch
  ```
- To run the examples app at http://localhost:5173
  ```
  pnpm --filter examples-app run dev
  ```
- To run the documentation at http://localhost:2001:
  ```
  pnpm --filter website run start
  ```
