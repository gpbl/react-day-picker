# Contributing to react-day-picker

You are welcome to join the [other contributors](https://github.com/gpbl/react-day-picker/graphs/contributors) and help improving react-day-picker! Please consider:

* The development environment is Node 7+.
* Code has 100% coverage and it should stay so
* Unit tests run with [jest](https://facebook.github.io/jest/)
* Code must be linted to pass our CI

### Fork and run the repo on your local machine

To setup the repository:

```bash
$ git clone https://github.com/gpbl/react-day-picker.git
$ cd react-day-picker
$ yarn
```

### Use the docs website to test your changes

Sometimes, the best way to develop and test a new idea or a bug fix is run it directly from the browser. That's why the docs website is written in React with [Gatsby](http://gatsbyjs.org).

To run the documentation website, 

```bash
$ cd react-day-picker
$ cd docs
$ yarn install
$ yarn develop
```

To see your changes, import `react-day-picker` directly from the source. For example, to use your locally modified `DayPicker` component in the [basic example](http://react-day-picker.js.org/examples/basic/) ([source](https://github.com/gpbl/react-day-picker/blob/master/docs/src/code-samples/examples/basic.js#L3)), point the `import` statement  to the main package's `./src` directory:

```diff
// docs/src/code-samples/examples/basic.js
- import DayPicker from 'react-day-picker';
+ import DayPicker from '../../../../src/DayPicker';
```

### Add unit tests

Tests are written with [jest](https://facebook.github.io/jest/). Please make sure your tests pass:

```bash
$ yarn test               # run unit tests
$ yarn test -- --coverage # print test coverage report
```

### Lint your files

If files are not linted, they will not pass our CI:

```bash
$ yarn lint               # make sure the code is linted
$ yarn dtslint            # lint Typescript declaration
```
