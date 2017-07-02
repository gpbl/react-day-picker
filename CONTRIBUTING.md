
If you are planning a pull request with lot of changes, please add an issue to discuss your idea first!

> The development environment is Node 7+. 

### Fork and run this repo on your local machine

To setup the repository:

```bash
$ git clone https://github.com/gpbl/react-day-picker.git
$ cd react-day-picker
$ yarn
```

### Add your unit tests

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
