import { construct2DArray } from '../../src/problems/34\_construct2DArray';

test('should return [[1,2],[3,4]]', () => {
	expect(construct2DArray([1, 2, 3, 4], 2, 2)).toStrictEqual([[1, 2], [3, 4]])
});

test('should return [[1, 2, 3]]', () => {
	expect(construct2DArray([1, 2, 3], 1, 3)).toStrictEqual([[1, 2, 3]])
});

test('should return []', () => {
	expect(construct2DArray([1, 2], 1, 1)).toStrictEqual([])
});