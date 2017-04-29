import { expect } from 'chai';

import * as ModifierUtils from '../src/ModifierUtils';

describe('dayMatchesModifier', () => {
  it('returns a boolean for a single day', () => {
    const match = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 19),
      new Date(2015, 8, 19)
    );
    expect(match).to.be.true;

    const fail = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 19),
      new Date(2014, 1, 1)
    );
    expect(fail).to.be.false;
  });
  it('ignores falsy values', () => {
    const match = ModifierUtils.dayMatchesModifier(new Date(2015, 8, 19), null);
    expect(match).to.be.false;
  });
  it('returns a boolean for an array of days', () => {
    const modifiers = [
      new Date(2015, 8, 19),
      new Date(2015, 8, 20),
      new Date(2015, 8, 21),
    ];
    const match1 = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 19),
      modifiers
    );
    expect(match1).to.be.true;

    modifiers.forEach(day => {
      expect(ModifierUtils.dayMatchesModifier(day, modifiers)).to.be.true;
    });
    expect(ModifierUtils.dayMatchesModifier(new Date(2015, 8, 22), modifiers))
      .to.be.false;
  });
  it('accepts an array of days ignoring falsy values', () => {
    const values = [null, 'test', new Date(2015, 8, 21)];

    const match = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 21),
      values
    );
    expect(match).to.be.true;
  });
  it('returns a boolean for a range of days', () => {
    const range = {
      from: new Date(2015, 8, 18),
      to: new Date(2015, 8, 20),
    };
    const match = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 19),
      range
    );
    expect(match).to.be.true;

    const fail = ModifierUtils.dayMatchesModifier(new Date(2015, 8, 17), range);
    expect(fail).to.be.false;
  });
  it('returns a boolean for multiple ranges of days', () => {
    const ranges = [
      {
        from: new Date(2015, 8, 18),
        to: new Date(2015, 8, 20),
      },
      {
        from: new Date(2015, 9, 18),
        to: new Date(2015, 9, 20),
      },
    ];

    const match1 = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 19),
      ranges
    );
    expect(match1).to.be.true;
    const match2 = ModifierUtils.dayMatchesModifier(
      new Date(2015, 9, 18),
      ranges
    );
    expect(match2).to.be.true;
  });
  it('returns a boolean for an "after" modifier', () => {
    const afterModifier = {
      after: new Date(2015, 8, 18),
    };
    const match = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 19),
      afterModifier
    );
    expect(match).to.be.true;

    const fail = ModifierUtils.dayMatchesModifier(
      new Date(2014, 8, 18),
      afterModifier
    );
    expect(fail).to.be.false;
  });
  it('returns a boolean for an "after" modifier in array', () => {
    const afterModifier = [{ after: new Date(2015, 8, 18) }];

    const match = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 19),
      afterModifier
    );
    expect(match).to.be.true;

    const fail = ModifierUtils.dayMatchesModifier(
      new Date(2014, 8, 19),
      afterModifier
    );
    expect(fail).to.be.false;
  });
  it('returns a boolean for a "before" modifier', () => {
    const beforeModifier = {
      before: new Date(2015, 8, 15),
    };
    const match = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 10),
      beforeModifier
    );
    expect(match).to.be.true;

    const fail = ModifierUtils.dayMatchesModifier(
      new Date(2016, 8, 10),
      beforeModifier
    );
    expect(fail).to.be.false;
  });
  it('returns a boolean "before" modifier in an array of days', () => {
    const afterModifier = [{ before: new Date(2015, 8, 15) }];

    const match = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 10),
      afterModifier
    );
    expect(match).to.be.true;

    const fail = ModifierUtils.dayMatchesModifier(
      new Date(2016, 8, 15),
      afterModifier
    );
    expect(fail).to.be.false;
  });
  it('works with mixing functions and other objects', () => {
    const mixedModifiers = [
      { before: new Date(2015, 8, 15) },
      day => day.getTime() === new Date(2015, 8, 17).getTime(),
    ];
    const match1 = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 10),
      mixedModifiers
    );
    expect(match1).to.be.true;

    const match2 = ModifierUtils.dayMatchesModifier(
      new Date(2015, 8, 17),
      mixedModifiers
    );
    expect(match2).to.be.true;

    const fail = ModifierUtils.dayMatchesModifier(
      new Date(2016, 8, 15),
      mixedModifiers
    );
    expect(fail).to.be.false;
  });
  it('works even without modifiers', () => {
    const match = ModifierUtils.dayMatchesModifier(new Date(2015, 8, 19));
    expect(match).to.be.false;
  });
});

describe('getModifiersForDay', () => {
  it('returns an array of modifiers', () => {
    const modifierFunctions = {
      yes() {
        return true;
      },
      no() {
        return false;
      },
      maybe(d) {
        return d.getMonth() === 8;
      },
    };
    let modifiers = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 19),
      modifierFunctions
    );
    expect(modifiers).to.have.length(2);
    expect(modifiers.indexOf('yes')).to.be.above(-1);
    expect(modifiers.indexOf('maybe')).to.be.above(-1);
    expect(modifiers.indexOf('no')).to.equal(-1);

    modifiers = ModifierUtils.getModifiersForDay(
      new Date(2015, 9, 19),
      modifierFunctions
    );
    expect(modifiers).to.have.length(1);
    expect(modifiers.indexOf('yes')).to.be.above(-1);
    expect(modifiers.indexOf('maybe')).to.equal(-1);
    expect(modifiers.indexOf('no')).to.equal(-1);
  });
  it('returns the modifier for a single day', () => {
    const modifiers = ModifierUtils.getModifiersForDay(new Date(2015, 8, 19), {
      foo: new Date(2015, 8, 19),
    });
    expect(modifiers).to.have.length(1);
    expect(modifiers.indexOf('foo')).to.equal(0);
  });
  it('ignores falsy values', () => {
    const modifiers = ModifierUtils.getModifiersForDay(new Date(2015, 8, 19), {
      foo: null,
      bar: false,
    });
    expect(modifiers).to.have.length(0);
    expect(modifiers.indexOf('foo')).to.equal(-1);
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
    const modifiers1 = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 19),
      modifiersObj
    );
    expect(modifiers1).to.have.length(2);
    expect(modifiers1.indexOf('foo')).to.be.above(-1);
    expect(modifiers1.indexOf('bar')).to.be.above(-1);

    const modifiers2 = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 20),
      modifiersObj
    );
    expect(modifiers2).to.have.length(2);
    expect(modifiers2.indexOf('foo')).to.be.above(-1);
    expect(modifiers2.indexOf('bar')).to.be.above(-1);

    const modifiers3 = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 21),
      modifiersObj
    );
    expect(modifiers3).to.have.length(1);
    expect(modifiers3.indexOf('foo')).to.equal(0);
    expect(modifiers3.indexOf('bar')).to.equal(-1);
  });
  it('accepts an array of days ignoring falsy values', () => {
    const values = {
      foo: [null, 'test', new Date(2015, 8, 21)],
    };
    const modifiers = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 21),
      values
    );
    expect(modifiers).to.have.length(1);
    expect(modifiers.indexOf('foo')).to.be.above(-1);
  });
  it('returns the modifier for a range of days', () => {
    const range = {
      foo: {
        from: new Date(2015, 8, 18),
        to: new Date(2015, 8, 20),
      },
    };
    const modifiers1 = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 19),
      range
    );
    expect(modifiers1).to.have.length(1);
    expect(modifiers1.indexOf('foo')).to.equal(0);
    const modifiers2 = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 17),
      range
    );
    expect(modifiers2).to.have.length(0);
  });
  it('returns the modifier for multiple ranges of days', () => {
    const ranges = {
      foo: [
        {
          from: new Date(2015, 8, 18),
          to: new Date(2015, 8, 20),
        },
        {
          from: new Date(2015, 9, 18),
          to: new Date(2015, 9, 20),
        },
      ],
    };
    const modifiers1 = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 19),
      ranges
    );
    expect(modifiers1.indexOf('foo')).to.equal(0);
    const modifiers2 = ModifierUtils.getModifiersForDay(
      new Date(2015, 9, 18),
      ranges
    );
    expect(modifiers2.indexOf('foo')).to.equal(0);
  });
  it('returns an "after" modifier', () => {
    const afterModifier = {
      foo: {
        after: new Date(2015, 8, 18),
      },
    };
    const modifiers = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 19),
      afterModifier
    );
    expect(modifiers).to.have.length(1);
    expect(modifiers.indexOf('foo')).to.equal(0);
  });
  it('returns an "after" modifier in an array of days', () => {
    const afterModifier = {
      foo: [{ after: new Date(2015, 8, 18) }],
    };
    const modifiers = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 19),
      afterModifier
    );
    expect(modifiers).to.have.length(1);
    expect(modifiers.indexOf('foo')).to.equal(0);
  });
  it('returns a "before" modifier', () => {
    const beforeModifier = {
      foo: {
        before: new Date(2015, 8, 15),
      },
    };
    const modifiers = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 10),
      beforeModifier
    );
    expect(modifiers).to.have.length(1);
    expect(modifiers.indexOf('foo')).to.equal(0);
  });
  it('returns a "before" modifier in an array of days', () => {
    const afterModifier = {
      foo: [{ before: new Date(2015, 8, 15) }],
    };
    const modifiers = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 10),
      afterModifier
    );
    expect(modifiers).to.have.length(1);
    expect(modifiers.indexOf('foo')).to.equal(0);
  });
  it('works with mixing functions and other objects', () => {
    const mixedModifiers = {
      foo: [
        { before: new Date(2015, 8, 15) },
        day => day.getTime() === new Date(2015, 8, 17).getTime(),
      ],
    };
    const modifiers = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 10),
      mixedModifiers
    );
    expect(modifiers).to.have.length(1);
    expect(modifiers.indexOf('foo')).to.equal(0);

    const modifiers2 = ModifierUtils.getModifiersForDay(
      new Date(2015, 8, 17),
      mixedModifiers
    );
    expect(modifiers2).to.have.length(1);
    expect(modifiers2.indexOf('foo')).to.equal(0);
  });
  it('works even without modifiers', () => {
    const modifiers = ModifierUtils.getModifiersForDay(new Date(2015, 8, 19));
    expect(modifiers).to.have.length(0);
  });
});
