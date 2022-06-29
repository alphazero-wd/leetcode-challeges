import { missingNumber } from '../../src/problems/2_missingNumber'

it('should return 2', () => {
  expect(missingNumber([3, 0, 1])).toBe(2)
})

it('should return 2', () => {
  expect(missingNumber([0, 1])).toBe(2)
})

it('should return 8', () => {
  expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
})

it('should return 0', () => {
  expect(missingNumber([1])).toBe(0)
})