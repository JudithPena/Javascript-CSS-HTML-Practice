import range from "./utils/range.js";

describe("range function", () => {
  it("should return array of numbers", () => {
    const result = range(1, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it("should return array of strings", () => {
    expect(range(3, 8)).toEqual([3, 4, 5, 6, 7, 8]);
  });
  it("should return reversed array if start greater than end", () => {
    expect(range(10, 6)).toEqual([6, 7, 8, 9, 10]);
  });
  it("should return start if start equal to end", () => {
    expect(range("1", "1")).toEqual([1]);
  });
});
