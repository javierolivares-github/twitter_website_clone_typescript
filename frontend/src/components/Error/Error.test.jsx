import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Error from "./Error";

describe("Error", () => {
  it("renders default error state", () => {
    render(<Error />);
    screen.debug();
  });
})