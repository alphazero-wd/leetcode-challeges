import { majorityElement } from '../../src/problems/33_majorityElement';

test('should return 3', () => {
	expect(majorityElement([3, 2, 3])).toBe(3)
});

test('should return 2', () => {
	expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
});

test('should return 4', () => {
	expect(majorityElement([2, 4, 1, 4, 5, 4])).toBe(4)
});

test('should return 1', () => {
	expect(majorityElement([1])).toBe(1)
});