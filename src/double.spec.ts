import { double } from "./double.js";
import { describe, it, expect } from "vitest";

describe("double", () => {
  it("should double the number", () => {
    expect(double(2)).toBe(4);
  });
});