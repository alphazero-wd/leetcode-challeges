import { singleNumber } from '../../src/problems/4_singleNumber'

it('should return 1', () => {
  expect(singleNumber([2, 2, 1])).toBe(1)
})

it('should return 4', () => {
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
})

it('should return 1', () => {
  expect(singleNumber([1])).toBe(1)
})