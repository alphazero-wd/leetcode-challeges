import { ListNode } from '../../src/data-structures/ListNode';
import { removeElements } from '../../src/problems/13_removeElements';
import { linkedListToArray } from '../../src/utils/linkedListToArray'

let head: ListNode | null
test('should return [1, 2, 3, 4, 5]', () => {
	head = new ListNode(1)
	head.next = new ListNode(2)
	head.next.next = new ListNode(6)
	head.next.next.next = new ListNode(3)
	head.next.next.next.next = new ListNode(4)
	head.next.next.next.next.next = new ListNode(5)
	head.next.next.next.next.next.next = new ListNode(6)

	const expected = linkedListToArray(removeElements(head, 6))
	expect(expected).toStrictEqual([1, 2, 3, 4, 5])
})
test('should return []', () => {
	head = null

	const expected = linkedListToArray(removeElements(head, 1))
	expect(expected).toStrictEqual([])
})
test('should return []', () => {
	head = new ListNode(7)
	head.next = new ListNode(7)
	head.next.next = new ListNode(7)
	head.next.next.next = new ListNode(7)

	const expected = linkedListToArray(removeElements(head, 7))
	expect(expected).toStrictEqual([])
})