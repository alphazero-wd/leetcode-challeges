import { sortedSquares } from '../../src/problems/31_sortedSquares';

test('should return [0,1,9,16,100]', () => {
	expect(sortedSquares([-4, -1, 0, 3, 10])).toStrictEqual([0, 1, 9, 16, 100])
});

test('should return [4,9,9,49,121]', () => {
	expect(sortedSquares([-7, -3, 2, 3, 11])).toStrictEqual([4, 9, 9, 49, 121])
});

test('should return [36]', () => {
	expect(sortedSquares([-6])).toStrictEqual([36])
});