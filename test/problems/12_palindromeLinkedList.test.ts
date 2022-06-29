import { ListNode } from '../../src/data-structures/ListNode';
import { isPalindrome } from '../../src/problems/12_palindromeLinkedList';

describe('should return if a linked list is a palindrome', () => {
	let head: ListNode | null
	test('should return true', () => {
		head = new ListNode(1)
		head.next = new ListNode(2)
		head.next.next = new ListNode(2)
		head.next.next.next = new ListNode(1)

		expect(isPalindrome(head)).toBeTruthy()
	})

	test('should return false', () => {
		head = new ListNode(1)
		head.next = new ListNode(2)
		expect(isPalindrome(head)).toBeFalsy()
	})
});