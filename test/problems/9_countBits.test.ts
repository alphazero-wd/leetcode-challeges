import { countBits } from '../../src/problems/9_countBits';

test('should return the number of 1s of 0 to 2', () => {
	expect(countBits(2)).toStrictEqual([0, 1, 1])
});

test('should return the number of 1s of 0 to 5', () => {
	expect(countBits(5)).toStrictEqual([0, 1, 1, 2, 1, 2])
});

test('should return the number of 1s of 0', () => {
	expect(countBits(0)).toStrictEqual([0])
});