import { beforeEach, describe, expect, it } from "vitest";

import { STORAGE_KEYS } from "@/shared/keys/keys";
import { getFavorites, isFavorite, toggleFavorite } from "./favorites";

describe("favorites utils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("getFavorites", () => {
    it("возвращает пустой массив, если избранных фильмов нет", () => {
      expect(getFavorites()).toEqual([]);
    });

    it("возвращает сохранённые фильмы", () => {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([1, 2, 3]));

      expect(getFavorites()).toEqual([1, 2, 3]);
    });
  });

  describe("isFavorite", () => {
    it("возвращает true, если фильм есть в избранном", () => {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([1, 2, 3]));

      expect(isFavorite(2)).toBe(true);
    });

    it("возвращает false, если фильма нет в избранном", () => {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([1, 2, 3]));

      expect(isFavorite(5)).toBe(false);
    });
  });

  describe("toggleFavorite", () => {
    it("добавляет фильм в избранное", () => {
      expect(toggleFavorite(10)).toBe(true);

      expect(getFavorites()).toEqual([10]);
    });

    it("удаляет фильм из избранного", () => {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([10, 20]));

      expect(toggleFavorite(10)).toBe(false);

      expect(getFavorites()).toEqual([20]);
    });
  });
});
