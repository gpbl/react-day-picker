import React from "react";
import { dateButton } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { TestCase2843 } from "./TestCase2843";

const today = new Date(2024, 8, 6);

setTestTime(today);
describe("when clicking the today button", () => {
  beforeEach(async () => {
    render(<TestCase2843 />);
    await user.click(dateButton(today));
  });

  test('the Today button has aria-disabled="true" but is not disabled', () => {
    expect(dateButton(today)).toHaveAttribute("aria-disabled", "true");
    expect(dateButton(today)).not.toBeDisabled();
  });
});
