import { search } from '../../src/problems/17_binarySearch';

test('should return 4', () => {
	expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
});

test('should return -1', () => {
	expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
});

test('should return 0', () => {
	expect(search([3], 3)).toBe(0)
});
