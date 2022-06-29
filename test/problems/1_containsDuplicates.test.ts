import { containsDuplicates } from '../../src/problems/1_containsDuplicates'

it('test 1', () => {
  expect(containsDuplicates([1, 2, 3, 1])).toBeTruthy()
})

it('should return false', () => {
  expect(containsDuplicates([1, 2, 3, 4])).toBeFalsy()
})

it('should return true', () => {
  expect(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy()
})

it('should return false', () => {
  expect(containsDuplicates([1])).toBeFalsy()
})