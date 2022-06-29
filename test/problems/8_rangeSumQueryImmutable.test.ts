import { NumArray } from '../../src/problems/8_rangeSumQueryImmutable';

describe('test 1', () => {
	let numArray: NumArray;
	test('should init an array', () => {
		numArray = new NumArray([-2, 0, 3, -5, 2, -1])
		expect(numArray.prefixSum).toStrictEqual([-2, -2, 1, -4, -2, -3])
	})

	test('should return as expected', () => {
		expect(numArray.sumRange(0, 2)).toBe(1)
		expect(numArray.sumRange(2, 5)).toBe(-1)
		expect(numArray.sumRange(0, 5)).toBe(-3)
		expect(numArray.sumRange(3, 4)).toBe(-3)
	})
})