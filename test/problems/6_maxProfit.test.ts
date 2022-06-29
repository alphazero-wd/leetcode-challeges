import { maxProfit } from '../../src/problems/6_maxProfit'
test('should return 5', () => {
	expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
});

test('should return 0', () => {
	expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
});

test('should return 0', () => {
	expect(maxProfit([1])).toBe(0)
});