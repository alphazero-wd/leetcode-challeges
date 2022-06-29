import { climbStairs } from '../../src/problems/5_climbStairs'

test('should return 2', () => {
  expect(climbStairs(2)).toBe(2)
})
test('should return 3', () => {
  expect(climbStairs(3)).toBe(3)
})
test('should return 8', () => {
  expect(climbStairs(5)).toBe(8)
})

test('should return 34', () => {
  expect(climbStairs(8)).toBe(34)
})

test('should return 1', () => {
  expect(climbStairs(1)).toBe(1)
})