import React from "react";

import Checkbox from "../../examples/checkbox";
import { render, fireEvent } from "react-testing-library";

test("Should be able to toggle", () => {
  const checkbox = <Checkbox initialValue>Power - toggler</Checkbox>;
  const { container } = render(checkbox);
  const element = container.querySelector("input");
  expect(element.checked).toBe(true);
  fireEvent.click(element);
  expect(element.checked).toBe(false);
  fireEvent.click(element);
  expect(element.checked).toBe(true);
});
