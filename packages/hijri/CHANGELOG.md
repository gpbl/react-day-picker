# @daypicker/hijri

DayPicker follows [Semantic Versioning](http://semver.org/). See the [Releases page](https://github.com/gpbl/react-day-picker/releases) on Github for the complete list of changes, diffs and contributors, or the [list of versions](https://www.npmjs.com/package/@daypicker/hijri?activeTab=versions) published on npm.

## v10.0.1

_Release date: 2026-05-12_

This patch release keeps `@daypicker/hijri` aligned with `@daypicker/react` v10.0.1 and adds `@types/react` as an optional peer dependency for strict package managers.

#### What's Changed

- fix: add `@types/react` as an optional peer dependency by [@mrmckeb](https://github.com/mrmckeb) in [#2997](https://github.com/gpbl/react-day-picker/pull/2997)
- chore: update `@daypicker/react` to v10.0.1

## v10.0.0

_Release date: 2026-05-08_

This is the first stable release of `@daypicker/hijri`, the DayPicker package for Hijri calendar support. It is published under the `@daypicker/*` scope and is intended to be installed alongside `@daypicker/react`.

#### Upgrading to v10

See the [upgrading guide](https://daypicker.dev/upgrading) for details on moving calendar usage to the standalone `@daypicker/*` packages.

#### Installation

```bash
npm install @daypicker/react @daypicker/hijri
```

#### What's Changed

- feat: publish Hijri calendar support as a standalone package
- feat: update the package to consume `@daypicker/react` by [@gpbl](https://github.com/gpbl) in [#2970](https://github.com/gpbl/react-day-picker/pull/2970)
