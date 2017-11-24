# Contributing to react-day-picker

You are welcome to join the
[other contributors](https://github.com/gpbl/react-day-picker/graphs/contributors)
and help improving react-day-picker! Please consider:

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

### Use the website to manually test changes

The best way to develop and test a new idea or a bug fix is to run locally
[the website](https://react-day-picker.js.org):

```bash
$ git clone https://github.com/gpbl/react-day-picker.git
$ cd react-day-picker
$ cd docs
$ yarn install
$ yarn develop
```

Then open [localhost:8000](http://localhost:8000).

> For example, change
> [./docs/src/code-samples/examples/basic.js](./docs/src/code-samples/examples/basic.js)
> to see it updated in
> [localhost:8000/examples/basic](http://localhost:8000/examples/basic).

In the code, using `import from react-day-picker` will load the
[source code](src) instead of the [compiled lib](lib).

### Add unit tests

Tests are written with [jest](https://facebook.github.io/jest/). Please make
sure your tests pass:

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
