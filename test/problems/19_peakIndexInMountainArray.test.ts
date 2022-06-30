import { peakIndexInMountainArray } from '../../src/problems/19_peakIndexInMountainArray';

test('should return 1', () => {
	expect(peakIndexInMountainArray([0, 1, 0])).toBe(1)
});
test('should return 1', () => {
	expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1)
});
test('should return 1', () => {
	expect(peakIndexInMountainArray([0, 10, 5, 2])).toBe(1)
});