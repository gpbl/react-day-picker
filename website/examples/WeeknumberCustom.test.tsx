import { renderApp, screen } from "@/test";

import { WeeknumberCustom } from "./WeeknumberCustom";

beforeEach(() => {
  renderApp(<WeeknumberCustom />);
});

test("should display the 1st week (even if December)", () => {
  expect(screen.getByRole("rowheader", { name: `W1` })).toBeInTheDocument();
});
