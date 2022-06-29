import { findDisappearedNumbers } from '../../src/problems/3_findDisappearedNumbers'

it('should return [5, 6]', () => {
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6])
})

it('should return [2]', () => {
  expect(findDisappearedNumbers([1, 1])).toEqual([2])
})

it('should return [2, 3, 4]', () => {
  expect(findDisappearedNumbers([1, 1, 1, 1])).toEqual([2, 3, 4])
})