import React from "react";
import { render, fireEvent } from "react-testing-library";
import CheckActive from "../../examples/checkActive";

test("Should be able to detect if it is active", () => {
  const changeFn = jest.fn();
  const activeBox = <CheckActive onChange={changeFn} />;
  const { container } = render(activeBox);
  const element = container.querySelector("div");
  expect(element.textContent).toBe("Is this active? false");
  fireEvent.mouseDown(element);
  // expect(changeFn).toHaveBeenCalledWith(true);
  //   fireEvent.mouseUp(element);
  //   expect(changeFn).toHaveBeenCalledWith(false);
});
