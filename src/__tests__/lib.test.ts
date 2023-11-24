import * as Functions from "../lib";

const { absolute, greet, getCurrencies } =
  jest.requireActual<typeof Functions>("../lib.ts");

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = absolute(-1);
    expect(result).toBe(1);
  });

  it("should return a zero number if input is zero", () => {
    const result = absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = greet("Lester");
    expect(result).toMatch(/Lester/);
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    // Arrange
    //
    // Act
    const result = getCurrencies();

    // Assert
    expect(result).toEqual(expect.arrayContaining(["EUR", "AUD", "USD"]));
  });
});
