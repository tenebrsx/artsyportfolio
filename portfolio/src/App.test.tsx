import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio title", () => {
  render(<App />);
  const titleElement = screen.getByText(/ANGEL/i);
  expect(titleElement).toBeInTheDocument();
});
