---
id: "datewithmodifiers"
title: "DateWithModifiers"
sidebar_label: "DateWithModifiers"
---

Helper class to move modifiers around the components.

## Index

**Constructors **: [constructor](datewithmodifiers.md#constructor), 

**Properties **: [date](datewithmodifiers.md#date), [modifiers](datewithmodifiers.md#modifiers), 

**Methods **: [getModifier](datewithmodifiers.md#getmodifier), 

## Constructors

###  constructor

\+ **new DateWithModifiers**(`date`: Date, `initialModifiers`: [MatchingModifiers](../index.md#matchingmodifiers), `props`: [DayPickerProps](../interfaces/daypickerprops.md)): *[DateWithModifiers](datewithmodifiers.md)*

*Defined in [packages/react-day-picker/src/classes/DateWithModifiers.ts:16](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/DateWithModifiers.ts#L16)*

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

*Defined in [packages/react-day-picker/src/classes/DateWithModifiers.ts:47](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/DateWithModifiers.ts#L47)*

___

###  modifiers

• **modifiers**: *[MatchingModifiers](../index.md#matchingmodifiers)*

*Defined in [packages/react-day-picker/src/classes/DateWithModifiers.ts:48](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/DateWithModifiers.ts#L48)*

## Methods

###  getModifier

▸ **getModifier**(`name`: string): *[DayMatchModifier](../index.md#daymatchmodifier)*

*Defined in [packages/react-day-picker/src/classes/DateWithModifiers.ts:50](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/DateWithModifiers.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[DayMatchModifier](../index.md#daymatchmodifier)*
