import { describe, expect, it } from "vitest";

import { getMovieGenres } from "./movieGenres";

describe("getMovieGenres", () => {
  it("возвращает названия жанров по их id", () => {
    expect(getMovieGenres([28, 35, 18])).toEqual(["Боевик", "Комедия", "Драма"]);
  });

  it("возвращает несколько жанров в правильном порядке", () => {
    expect(getMovieGenres([12, 14, 878])).toEqual(["Приключения", "Фэнтези", "Фантастика"]);
  });

  it("игнорирует неизвестные id жанров", () => {
    expect(getMovieGenres([28, 999999, 35])).toEqual(["Боевик", "Комедия"]);
  });

  it("возвращает пустой массив, если genreIds не передан", () => {
    expect(getMovieGenres()).toEqual([]);
  });
});
