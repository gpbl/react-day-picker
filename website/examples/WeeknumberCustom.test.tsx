import { renderApp, screen } from "../test-v8";

import { WeeknumberCustom } from "./WeeknumberCustom";

beforeEach(() => {
  renderApp(<WeeknumberCustom />);
});

test("should display the 1st week (even if December)", () => {
  expect(screen.getByRole("cell", { name: `W1` })).toBeInTheDocument();
});
