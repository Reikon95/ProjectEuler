// run with -  npm run test ./problem-3/3.test.js

const largestPrimeFactor = require('./3');

test('2', () => {
  expect(largestPrimeFactor(2)).toBe(2);
});

test('3', () => {
  expect(largestPrimeFactor(3)).toBe(3);
});

test('5', () => {
  expect(largestPrimeFactor(5)).toBe(5);
});

test('7', () => {
  expect(largestPrimeFactor(7)).toBe(7);
});

test('8', () => {
  expect(largestPrimeFactor(2)).toBe(2);
});

test('13195', () => {
  expect(largestPrimeFactor(29)).toBe(29);
});

test('600851475143', () => {
  expect(largestPrimeFactor(6857)).toBe(6857);
});
