# Contributing to DayPicker

> ⚠️ The `master` branch is for the [upcoming v8 release](https://github.com/gpbl/react-day-picker/issues/942). Switch to the `v7` branch to send updates for the v7 version.

You are welcome to join the
[other contributors](https://github.com/gpbl/react-day-picker/graphs/contributors)
and help improving DayPicker!

## Contributing to v8

The upcoming major release is a Typescript rewrite. Checkout the [v8 project](https://github.com/gpbl/react-day-picker/projects/7) to see what's left to do.

### Developing environment

* The repository is using workspaces with [yarn v2](http://yarnpkg.com)
  * There are two workspaces, one for the website and one for the package
* Website is built with [docusaurus](https://v2.docusaurus.io)
* The Node.js version we use is `^12.0`

### Start contributing

#### 1. Fork the repo on your local machine

```bash
git clone https://github.com/gpbl/react-day-picker.git
cd react-day-picker
yarn install
```

#### 2. Start the development environment

Build the package and website in watch mode:

```bash
yarn workspace react-day-picker develop
yarn workspace website develop
```

#### 3. Apply changes and open a PR :)

* add tests and make sure they pass: `yarn test`
* make sure your files are linted: `yarn lint`
