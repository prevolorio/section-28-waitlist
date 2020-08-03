import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders site header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/City/i);
  expect(linkElement).toBeInTheDocument();
});
