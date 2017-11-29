# Contributing to react-day-picker

You are welcome to join the
[other contributors](https://github.com/gpbl/react-day-picker/graphs/contributors)
and help improving react-day-picker! Please consider:

* The development environment is Node 7+.
* Unit tests run with [jest](https://facebook.github.io/jest/)
* Code has 100% test coverage and it should stay so (`yarn test --coverage` to check it)
* Code must be linted to pass our CI (`yarn lint`)

### Start now! 

Pick an [issue](https://github.com/gpbl/react-day-picker/issues) you would like to fix or a feature you would like to see.
[good-first-issues](https://github.com/gpbl/react-day-picker/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) are a good place to start.

### Fork and run the repo on your local machine:

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
