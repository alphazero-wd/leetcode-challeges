import { nextGreatestLetter } from '../../src/problems/18_nextGreatestLetter';

test('should return c', () => {
	expect(nextGreatestLetter(["c", "f", "j"], "a")).toBe("c")
});

test('should return f', () => {
	expect(nextGreatestLetter(["c", "f", "j"], "c")).toBe("f")
});

test('should return d', () => {
	expect(nextGreatestLetter(["c", "f", "j"], "d")).toBe("f")
});

test('should return a', () => {
	expect(nextGreatestLetter(["a", "b"], "z")).toBe("a")
});