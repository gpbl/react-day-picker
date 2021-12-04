# Working with the source

This repository works with [Yarn workspaces](https://yarnpkg.com/features/workspaces) enabled.

- `./package/react-day-picker`: this workspace contains the DayPicker source code and the development tools
- `./website`: the [Docusaurus](http://v2.docusaurus.io) app for [the documentation website](http://react-day-picker-next.netlify.app)

```
$ git clone git@github.com:gpbl/react-day-picker.git
$ cd react-day-picker
$ yarn install
```

## Development environment

To build and start watching the source run these scripts:

```bash
$ yarn workspace react-day-picker develop # start the build in watch mode
$ yarn workspace website start # start the website in watch mode
```

#### Testing

To run the unit tests in watch mode:

```
$ yarn workspace react-day-picker test --watch
```
