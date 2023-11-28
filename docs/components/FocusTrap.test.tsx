import { render, screen } from '@testing-library/react';
import { FocusTrap } from './FocusTrap'; // assume this path
import { user } from '../../test';

describe('FocusTrap', () => {
  it('traps focus when active', async () => {
    render(
      <div>
        <FocusTrap active={true}>
          <button>Button 1</button>
          <button>Button 2</button>
        </FocusTrap>
        <button>Button 3</button>
      </div>
    );

    const button1 = screen.getByText('Button 1');
    const button2 = screen.getByText('Button 2');
    const button3 = screen.getByText('Button 3');

    await user.tab();
    expect(document.activeElement).toBe(button1);

    await user.tab();
    expect(document.activeElement).toBe(button2);

    await user.tab();
    expect(document.activeElement).not.toBe(button3);
    expect(document.activeElement).toBe(button1);

    await user.tab({ shift: true });
    expect(document.activeElement).toBe(button2);
  });

  it('does not trap focus when inactive', async () => {
    render(
      <div>
        <FocusTrap active={false}>
          <button>Button 1</button>
          <button>Button 2</button>
        </FocusTrap>
        <button>Button 3</button>
      </div>
    );

    const button1 = screen.getByText('Button 1');
    const button2 = screen.getByText('Button 2');
    const button3 = screen.getByText('Button 3');

    await user.tab();
    expect(document.activeElement).toBe(button1);

    await user.tab();
    expect(document.activeElement).toBe(button2);

    await user.tab();
    expect(document.activeElement).toBe(button3);
  });
});
