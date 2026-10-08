import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("рендерится", () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("принимает className", () => {
    render(<Skeleton data-testid="skeleton" className="custom-class" />);

    expect(screen.getByTestId("skeleton")).toHaveClass("custom-class");
  });
});
