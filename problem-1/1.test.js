const func3and5 = require("./1")

test("primes", () => {
  expect(func3and5(10)).toBe(23)
})

test("primes", () => {
  expect(func3and5(49)).toBe(543)
})
test("primes", () => {
  expect(func3and5(1000)).toBe(233168)
})
test("primes", () => {
  expect(func3and5(8456)).toBe(16687353)
})
test("primes", () => {
  expect(func3and5(19564)).toBe(89301183)
})