import * as ModifiersUtils from '../src/ModifiersUtils';

describe('ModifiersUtils', () => {
  it('should export all the functions', () => {
    const imported = require('../src/ModifiersUtils').default; // eslint-disable-line global-require
    expect(Object.keys(ModifiersUtils).length - 1).toEqual(
      Object.keys(imported).length
    );
  });
  describe('dayMatchesModifier', () => {
    it('matches a single day', () => {
      const match = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 19),
        new Date(2015, 8, 19)
      );
      expect(match).toBe(true);

      const fail = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 19),
        new Date(2014, 1, 1)
      );
      expect(fail).toBe(false);
    });
    it('ignores falsy values', () => {
      const match = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 19),
        null
      );
      expect(match).toBe(false);
    });
    it('matches array of days', () => {
      const modifiers = [
        new Date(2015, 8, 19),
        new Date(2015, 8, 20),
        new Date(2015, 8, 21),
      ];
      const match1 = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 19),
        modifiers
      );
      expect(match1).toBe(true);

      modifiers.forEach(day => {
        expect(ModifiersUtils.dayMatchesModifier(day, modifiers)).toBe(true);
      });
      expect(
        ModifiersUtils.dayMatchesModifier(new Date(2015, 8, 22), modifiers)
      ).toBe(false);
    });
    it('matches an array of days ignoring falsy values', () => {
      const values = [null, 'test', new Date(2015, 8, 21)];

      const match = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 21),
        values
      );
      expect(match).toBe(true);
    });
    it('matches range of days', () => {
      const range = { from: new Date(2015, 8, 18), to: new Date(2015, 8, 20) };
      const match = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 19),
        range
      );
      expect(match).toBe(true);

      const fail = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 17),
        range
      );
      expect(fail).toBe(false);
    });
    it('matches multiple ranges of days', () => {
      const ranges = [
        { from: new Date(2015, 8, 18), to: new Date(2015, 8, 20) },
        { from: new Date(2015, 9, 18), to: new Date(2015, 9, 20) },
      ];

      const match1 = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 19),
        ranges
      );
      expect(match1).toBe(true);
      const match2 = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 9, 18),
        ranges
      );
      expect(match2).toBe(true);
    });
    it('matches "after" and "before" modifiers (inner)', () => {
      const afterBeforeModifier = {
        after: new Date(2015, 8, 10),
        before: new Date(2015, 8, 18),
      };
      const match = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 15),
        afterBeforeModifier
      );
      expect(match).toBe(true);

      const fail = ModifiersUtils.dayMatchesModifier(
        new Date(2014, 8, 9),
        afterBeforeModifier
      );
      expect(fail).toBe(false);
    });
    it('matches "after" and "before" modifiers (outer)', () => {
      const afterBeforeModifier = {
        after: new Date(2015, 8, 18),
        before: new Date(2015, 8, 10),
      };
      const match1 = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 5),
        afterBeforeModifier
      );
      expect(match1).toBe(true);
      const match2 = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 20),
        afterBeforeModifier
      );
      expect(match2).toBe(true);
      const fail = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 15),
        afterBeforeModifier
      );
      expect(fail).toBe(false);
    });
    it('matches "after" and "before" modifiers (same day)', () => {
      const afterBeforeModifier = {
        before: new Date(2015, 8, 10),
        after: new Date(2015, 8, 10),
      };
      const match1 = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 5),
        afterBeforeModifier
      );
      expect(match1).toBe(true);
      const match2 = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 20),
        afterBeforeModifier
      );
      expect(match2).toBe(true);
      const fail = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 10),
        afterBeforeModifier
      );
      expect(fail).toBe(false);
    });
    it('matches "after" modifiers', () => {
      const afterModifier = { after: new Date(2015, 8, 18) };
      const match = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 19),
        afterModifier
      );
      expect(match).toBe(true);

      const fail = ModifiersUtils.dayMatchesModifier(
        new Date(2014, 8, 18),
        afterModifier
      );
      expect(fail).toBe(false);
    });
    it('matches an array of "after" modifiers', () => {
      const afterModifier = [{ after: new Date(2015, 8, 18) }];

      const match = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 19),
        afterModifier
      );
      expect(match).toBe(true);

      const fail = ModifiersUtils.dayMatchesModifier(
        new Date(2014, 8, 19),
        afterModifier
      );
      expect(fail).toBe(false);
    });
    it('matches a "before" modifier', () => {
      const beforeModifier = { before: new Date(2015, 8, 15) };
      const match = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 10),
        beforeModifier
      );
      expect(match).toBe(true);

      const fail = ModifiersUtils.dayMatchesModifier(
        new Date(2016, 8, 10),
        beforeModifier
      );
      expect(fail).toBe(false);
    });
    it('matches an array of "before" modifiers', () => {
      const afterModifier = [{ before: new Date(2015, 8, 15) }];

      const match = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 10),
        afterModifier
      );
      expect(match).toBe(true);

      const fail = ModifiersUtils.dayMatchesModifier(
        new Date(2016, 8, 15),
        afterModifier
      );
      expect(fail).toBe(false);
    });
    it('matches when mixing functions and other objects', () => {
      const mixedModifiers = [
        { before: new Date(2015, 8, 15) },
        day => day.getTime() === new Date(2015, 8, 17).getTime(),
      ];
      const match1 = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 10),
        mixedModifiers
      );
      expect(match1).toBe(true);

      const match2 = ModifiersUtils.dayMatchesModifier(
        new Date(2015, 8, 17),
        mixedModifiers
      );
      expect(match2).toBe(true);

      const fail = ModifiersUtils.dayMatchesModifier(
        new Date(2016, 8, 15),
        mixedModifiers
      );
      expect(fail).toBe(false);
    });
    it('matches day of weeks modifiers', () => {
      const modifier = { daysOfWeek: [0, 6] }; // saturday an sunday
      const match1 = ModifiersUtils.dayMatchesModifier(
        new Date(2017, 4, 13),
        modifier
      ); // saturday
      expect(match1).toBe(true);
      const match2 = ModifiersUtils.dayMatchesModifier(
        new Date(2017, 4, 14),
        modifier
      ); // sunday
      expect(match2).toBe(true);
      const match3 = ModifiersUtils.dayMatchesModifier(
        new Date(2017, 4, 12),
        modifier
      ); // friday
      expect(match3).toBe(false);
    });
    it('works even without modifiers', () => {
      const match = ModifiersUtils.dayMatchesModifier(new Date(2015, 8, 19));
      expect(match).toBe(false);
    });
  });

  describe('getModifiersForDay', () => {
    it('returns an array of modifiers', () => {
      const modifierFunctions = {
        yes: () => true,
        no: () => false,
        maybe: d => d.getMonth() === 8,
      };
      let modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 19),
        modifierFunctions
      );
      expect(modifiers).toHaveLength(2);
      expect(modifiers.indexOf('yes')).toBeGreaterThan(-1);
      expect(modifiers.indexOf('maybe')).toBeGreaterThan(-1);
      expect(modifiers.indexOf('no')).toBe(-1);

      modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 9, 19),
        modifierFunctions
      );
      expect(modifiers).toHaveLength(1);
      expect(modifiers.indexOf('yes')).toBeGreaterThan(-1);
      expect(modifiers.indexOf('maybe')).toBe(-1);
      expect(modifiers.indexOf('no')).toBe(-1);
    });
    it('returns the modifier for a single day', () => {
      const modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 19),
        {
          foo: new Date(2015, 8, 19),
        }
      );
      expect(modifiers).toHaveLength(1);
      expect(modifiers.indexOf('foo')).toBe(0);
    });
    it('ignores falsy values', () => {
      const modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 19),
        {
          foo: null,
          bar: false,
        }
      );
      expect(modifiers).toHaveLength(0);
      expect(modifiers.indexOf('foo')).toBe(-1);
    });
    it('returns the modifier for an array of days', () => {
      const modifiersObj = {
        foo: [
          new Date(2015, 8, 19),
          new Date(2015, 8, 20),
          new Date(2015, 8, 21),
        ],
        bar: [new Date(2015, 8, 19), new Date(2015, 8, 20)],
      };
      const modifiers1 = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 19),
        modifiersObj
      );
      expect(modifiers1).toHaveLength(2);
      expect(modifiers1.indexOf('foo')).toBeGreaterThan(-1);
      expect(modifiers1.indexOf('bar')).toBeGreaterThan(-1);

      const modifiers2 = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 20),
        modifiersObj
      );
      expect(modifiers2).toHaveLength(2);
      expect(modifiers2.indexOf('foo')).toBeGreaterThan(-1);
      expect(modifiers2.indexOf('bar')).toBeGreaterThan(-1);

      const modifiers3 = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 21),
        modifiersObj
      );
      expect(modifiers3).toHaveLength(1);
      expect(modifiers3.indexOf('foo')).toBe(0);
      expect(modifiers3.indexOf('bar')).toBe(-1);
    });
    it('accepts an array of days ignoring falsy values', () => {
      const values = { foo: [null, 'test', new Date(2015, 8, 21)] };
      const modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 21),
        values
      );
      expect(modifiers).toHaveLength(1);
      expect(modifiers.indexOf('foo')).toBeGreaterThan(-1);
    });
    it('returns the modifier for a range of days', () => {
      const range = {
        foo: { from: new Date(2015, 8, 18), to: new Date(2015, 8, 20) },
      };
      const modifiers1 = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 19),
        range
      );
      expect(modifiers1).toHaveLength(1);
      expect(modifiers1.indexOf('foo')).toBe(0);
      const modifiers2 = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 17),
        range
      );
      expect(modifiers2).toHaveLength(0);
    });
    it('returns the modifier for multiple ranges of days', () => {
      const ranges = {
        foo: [
          { from: new Date(2015, 8, 18), to: new Date(2015, 8, 20) },
          { from: new Date(2015, 9, 18), to: new Date(2015, 9, 20) },
        ],
      };
      const modifiers1 = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 19),
        ranges
      );
      expect(modifiers1.indexOf('foo')).toBe(0);
      const modifiers2 = ModifiersUtils.getModifiersForDay(
        new Date(2015, 9, 18),
        ranges
      );
      expect(modifiers2.indexOf('foo')).toBe(0);
    });
    it('returns an "after/before" modifier', () => {
      const afterModifier = {
        foo: { after: new Date(2015, 8, 10), before: new Date(2015, 8, 18) },
      };
      const modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 15),
        afterModifier
      );
      expect(modifiers).toHaveLength(1);
      expect(modifiers.indexOf('foo')).toBe(0);
    });
    it('returns an "after" modifier', () => {
      const afterModifier = { foo: { after: new Date(2015, 8, 18) } };
      const modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 19),
        afterModifier
      );
      expect(modifiers).toHaveLength(1);
      expect(modifiers.indexOf('foo')).toBe(0);
    });
    it('returns an "after" modifier in an array of days', () => {
      const afterModifier = { foo: [{ after: new Date(2015, 8, 18) }] };
      const modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 19),
        afterModifier
      );
      expect(modifiers).toHaveLength(1);
      expect(modifiers.indexOf('foo')).toBe(0);
    });
    it('returns a "before" modifier', () => {
      const beforeModifier = { foo: { before: new Date(2015, 8, 15) } };
      const modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 10),
        beforeModifier
      );
      expect(modifiers).toHaveLength(1);
      expect(modifiers.indexOf('foo')).toBe(0);
    });
    it('returns a "before" modifier in an array of days', () => {
      const afterModifier = { foo: [{ before: new Date(2015, 8, 15) }] };
      const modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 10),
        afterModifier
      );
      expect(modifiers).toHaveLength(1);
      expect(modifiers.indexOf('foo')).toBe(0);
    });
    it('works with mixing functions and other objects', () => {
      const mixedModifiers = {
        foo: [
          { before: new Date(2015, 8, 15) },
          day => day.getTime() === new Date(2015, 8, 17).getTime(),
        ],
      };
      const modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 10),
        mixedModifiers
      );
      expect(modifiers).toHaveLength(1);
      expect(modifiers.indexOf('foo')).toBe(0);

      const modifiers2 = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 17),
        mixedModifiers
      );
      expect(modifiers2).toHaveLength(1);
      expect(modifiers2.indexOf('foo')).toBe(0);
    });
    it('works even without modifiers', () => {
      const modifiers = ModifiersUtils.getModifiersForDay(
        new Date(2015, 8, 19)
      );
      expect(modifiers).toHaveLength(0);
    });
  });
});
