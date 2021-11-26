const fiboEvenSum = require("./2")

test("10", () => {
  expect(fiboEvenSum(10)).toBe(10)
})

test("34", () => {
  expect(fiboEvenSum(44)).toBe(44)
})

test("60", () => {
  expect(fiboEvenSum(44)).toBe(44)
})

test("1000", () => {
  expect(fiboEvenSum(798)).toBe(798)
})

test("10000", () => {
  expect(fiboEvenSum(60696)).toBe(60696)
})

test("4000000", () => {
  expect(fiboEvenSum(4613732)).toBe(4613732)
})
