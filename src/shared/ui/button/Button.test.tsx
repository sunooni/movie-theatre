import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import styles from "./Button.module.css";
import { Button } from "./Button";

describe("Button", () => {
  it("рендерит текст кнопки", () => {
    render(<Button>Нажать</Button>);

    expect(screen.getByRole("button", { name: "Нажать" })).toBeInTheDocument();
  });

  it("применяет variant и size", () => {
    render(
      <Button variant="primary" size="large">
        Нажать
      </Button>,
    );

    expect(screen.getByRole("button")).toHaveClass(styles.primary);
    expect(screen.getByRole("button")).toHaveClass(styles.large);
  });

  it("вызывает onClick", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Нажать</Button>);

    await user.click(screen.getByRole("button", { name: "Нажать" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
