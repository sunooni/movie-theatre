import { describe, expect, it } from "vitest";

import { getMoviePosterUrl } from "./imageUrl";

describe("getMoviePosterUrl", () => {
  it("возвращает URL постера, если posterPath передан", () => {
    expect(getMoviePosterUrl("/abc123.jpg")).toBe("https://image.tmdb.org/t/p/w500/abc123.jpg");
  });

  it("возвращает placeholder, если posterPath равен null", () => {
    expect(getMoviePosterUrl(null)).toBe("https://via.placeholder.com/300x450?text=No+Image");
  });

  it("возвращает placeholder, если posterPath не передан", () => {
    expect(getMoviePosterUrl()).toBe("https://via.placeholder.com/300x450?text=No+Image");
  });
});
