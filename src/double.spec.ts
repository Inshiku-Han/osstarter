import { describe, expect, it } from "vitest";
import { double } from "./double.js";

describe("double", () => {
	it("should double the number", () => {
		expect(double(2)).toBe(4);
	});
});
