# @daypicker/ethiopic

DayPicker follows [Semantic Versioning](http://semver.org/). See the [Releases page](https://github.com/gpbl/react-day-picker/releases) on Github for the complete list of changes, diffs and contributors, or the [list of versions](https://www.npmjs.com/package/@daypicker/ethiopic?activeTab=versions) published on npm.

## v10.0.0

_Release date: 2026-05-08_

This is the first stable release of `@daypicker/ethiopic`, the DayPicker package for Ethiopic calendar support. It is published under the `@daypicker/*` scope and is intended to be installed alongside `@daypicker/react`.

#### Upgrading to v10

See the [upgrading guide](https://daypicker.dev/upgrading) for details on moving calendar usage to the standalone `@daypicker/*` packages.

#### Installation

```bash
npm install @daypicker/react @daypicker/ethiopic
```

#### What's Changed

- feat: publish Ethiopic calendar support as a standalone package
- feat: update the package to consume `@daypicker/react` by [@gpbl](https://github.com/gpbl) in [#2970](https://github.com/gpbl/react-day-picker/pull/2970)
- fix: move the `amET` locale export to `@daypicker/ethiopic` by [@gpbl](https://github.com/gpbl) in [#2968](https://github.com/gpbl/react-day-picker/pull/2968)
- fix: respect custom `dateLib` overrides in calendar wrappers by [@gpbl](https://github.com/gpbl) in [#2964](https://github.com/gpbl/react-day-picker/pull/2964)
