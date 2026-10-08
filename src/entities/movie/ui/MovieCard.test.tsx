import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { MovieCard } from "./MovieCard";

describe("MovieCard", () => {
  it("рендерит название фильма", () => {
    render(
      <MemoryRouter>
        <MovieCard id={123} title="Интерстеллар" posterPath="/poster.jpg" showInfo />
      </MemoryRouter>,
    );

    expect(screen.getByText("Интерстеллар")).toBeInTheDocument();
  });

  it("рендерит рейтинг", () => {
    render(
      <MemoryRouter>
        <MovieCard id={123} title="Интерстеллар" posterPath="/poster.jpg" rating={8.6} showInfo />
      </MemoryRouter>,
    );

    expect(screen.getByText("★ 8.6")).toBeInTheDocument();
  });

  it("содержит ссылку на страницу фильма", () => {
    render(
      <MemoryRouter>
        <MovieCard id={123} title="Интерстеллар" posterPath="/poster.jpg" />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link")).toHaveAttribute("href", "/movie/123");
  });
});
