import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders site header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/RCS Non Specialized Referral Management/i);
  expect(linkElement).toBeInTheDocument();
});
