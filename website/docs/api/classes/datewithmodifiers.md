---
id: "datewithmodifiers"
title: "DateWithModifiers"
sidebar_label: "DateWithModifiers"
---

# Class: DateWithModifiers

Helper class to move modifiers around the components.

## Hierarchy

* **DateWithModifiers**

## Index

### Constructors

* [constructor](datewithmodifiers.md#constructor)

### Properties

* [date](datewithmodifiers.md#date)
* [modifiers](datewithmodifiers.md#modifiers)

### Methods

* [getModifier](datewithmodifiers.md#getmodifier)

## Constructors

###  constructor

\+ **new DateWithModifiers**(`date`: Date, `initialModifiers`: [MatchingModifiers](../index.md#matchingmodifiers), `props`: [DayPickerProps](../interfaces/daypickerprops.md)): *[DateWithModifiers](datewithmodifiers.md)*

*Defined in [packages/react-day-picker/src/classes/DateWithModifiers.ts:18](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/classes/DateWithModifiers.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | Date | - |
`initialModifiers` | [MatchingModifiers](../index.md#matchingmodifiers) | {} |
`props` | [DayPickerProps](../interfaces/daypickerprops.md) | - |

**Returns:** *[DateWithModifiers](datewithmodifiers.md)*

## Properties

###  date

• **date**: *Date*

*Defined in [packages/react-day-picker/src/classes/DateWithModifiers.ts:50](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/classes/DateWithModifiers.ts#L50)*

___

###  modifiers

• **modifiers**: *[MatchingModifiers](../index.md#matchingmodifiers)*

*Defined in [packages/react-day-picker/src/classes/DateWithModifiers.ts:51](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/classes/DateWithModifiers.ts#L51)*

## Methods

###  getModifier

▸ **getModifier**(`name`: string): *[DayMatchModifier](../index.md#daymatchmodifier)*

*Defined in [packages/react-day-picker/src/classes/DateWithModifiers.ts:53](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/classes/DateWithModifiers.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[DayMatchModifier](../index.md#daymatchmodifier)*
