# @daypicker/hebrew

## 10.0.1

### Patch Changes

- [#2997](https://github.com/gpbl/react-day-picker/pull/2997) [`885ec9e`](https://github.com/gpbl/react-day-picker/commit/885ec9e7710d3d3e851e23cf1978b893f9e9af50) Thanks [@mrmckeb](https://github.com/mrmckeb)! - Added `@types/react` as an optional peer dependency to fix type resolution under strict package managers.

- Updated dependencies [[`885ec9e`](https://github.com/gpbl/react-day-picker/commit/885ec9e7710d3d3e851e23cf1978b893f9e9af50)]:
  - @daypicker/react@10.0.1

DayPicker follows [Semantic Versioning](http://semver.org/). See the [Releases page](https://github.com/gpbl/react-day-picker/releases) on Github for the complete list of changes, diffs and contributors, or the [list of versions](https://www.npmjs.com/package/@daypicker/hebrew?activeTab=versions) published on npm.

## v10.0.0

_Release date: 2026-05-08_

This is the first stable release of `@daypicker/hebrew`, the DayPicker package for Hebrew calendar support. It is published under the `@daypicker/*` scope and is intended to be installed alongside `@daypicker/react`.

#### Upgrading to v10

See the [upgrading guide](https://daypicker.dev/upgrading) for details on moving calendar usage to the standalone `@daypicker/*` packages.

#### Installation

```bash
npm install @daypicker/react @daypicker/hebrew
```

#### What's Changed

- feat: publish Hebrew calendar support as a standalone package
- feat: update the package to consume `@daypicker/react` by [@gpbl](https://github.com/gpbl) in [#2970](https://github.com/gpbl/react-day-picker/pull/2970)
- fix: respect custom `dateLib` overrides in calendar wrappers by [@gpbl](https://github.com/gpbl) in [#2964](https://github.com/gpbl/react-day-picker/pull/2964)
