import { backspaceCompare } from '../../src/problems/32_backspaceCompare';

test('should return true', () => {
	expect(backspaceCompare('ab#c', 'ad#c')).toBeTruthy()
});

test('should return true', () => {
	expect(backspaceCompare('ab##', 'c#d#')).toBeTruthy()
});

test('should return false', () => {
	expect(backspaceCompare('a#c', 'b')).toBeFalsy()
});