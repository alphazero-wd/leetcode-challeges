import { ListNode } from '../../src/data-structures/ListNode';
import { reverseList } from '../../src/problems/15_reverseList';
import { linkedListToArray } from '../../src/utils/linkedListToArray';

let head: ListNode | null

test('should return [5, 4, 3, 2, 1]', () => {
	head = new ListNode(1)
	head.next = new ListNode(2)
	head.next.next = new ListNode(3)
	head.next.next.next = new ListNode(4)
	head.next.next.next.next = new ListNode(5)
	const expected = linkedListToArray(reverseList(head))
	expect(expected).toStrictEqual([5, 4, 3, 2, 1])
});

test('should return [2, 1]', () => {
	head = new ListNode(1)
	head.next = new ListNode(2)
	const expected = linkedListToArray(reverseList(head))
	expect(expected).toStrictEqual([2, 1])
});

test('should return []', () => {
	head = null
	const expected = linkedListToArray(reverseList(head))
	expect(expected).toStrictEqual([])
});