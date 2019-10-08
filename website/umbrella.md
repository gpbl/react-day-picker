This issue will keep track of the current progress of v8.

## v8 Goals

react-day-picker v8 is a complete rewrite.

The current architecture is becoming cluttered and obsolete and it's no more fun to maintain.

The main objectives of the new major release are:

- remove internal date utilities and make [date-fns](http://date-fns.org) a peer dependency
- simplify the source code
- have consistent, modern API updated for latest React
- have better and more consistent support of "custom components"
- move from webpack to rollup for the build process
- get rid of `DayPickerInput`
- have a new website built with Docusaurus

## To-do list

> This list is indicative and will be likely be updated during the development.

### DayPicker

- [x] Review status & architecture
- [x] Rewrite components
  - [x] DayPicker
  - [x] Head
  - [x] Navigation
  - [x] Caption
  - [x] Month
  - [x] Week
  - [x] Day
- [ ] Rewrite props
  - [x] rendering months
  - [x] modifiers
  - [x] customization
  - [x] navigation
  - [x] localization
  - [x] basic events
  - [ ] advanced events (touch etc)
- [x] Rewrite style.css
- [ ] Custom components
- [ ] Re-add keyboard navigation
- [ ] Verify WCAG are respected

### Build process

- [x] Move to rollup
- [ ] Verify build works

### Deploy and release

- [ ] Update release job

### Website

Website for v8 is temporarily available at http://rdp-v8.netlify.com.

- [x] Setup Docusaurus
- [x] Get Started
- [x] DayPicker Basics
- [x] Styling
- [x] Customization
- [ ] Guides
  - [x] Matching Days
  - [x] Use of Modifiers
  - [ ] Input Fields
  - [ ] Localization
  - [ ] Custom Components
- [x] API
  - [x] Props
- [ ] Support
- [ ] Changelog
- [ ] Link to old version
- [ ] Dark mode should work nicely

### Backward compatibility

- [ ] Verify that deprecated props works
- [ ] Document breaking changes
