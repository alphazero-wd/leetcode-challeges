import { ListNode } from '../../src/data-structures/ListNode';
import { deleteElements } from '../../src/problems/14_deleteDuplicates';
import { linkedListToArray } from '../../src/utils/linkedListToArray'

let head: ListNode | null
test('should return [1, 2]', () => {
	head = new ListNode(1)
	head.next = new ListNode(1)
	head.next.next = new ListNode(2)
	const expected = linkedListToArray(deleteElements(head))
	expect(expected).toStrictEqual([1, 2])
});
test('should return [1, 2, 3]', () => {
	head = new ListNode(1)
	head.next = new ListNode(1)
	head.next.next = new ListNode(2)
	head.next.next.next = new ListNode(3)
	head.next.next.next = new ListNode(3)
	const expected = linkedListToArray(deleteElements(head))
	expect(expected).toStrictEqual([1, 2, 3])
});

test('should return [7]', () => {
	head = new ListNode(7)
	head.next = new ListNode(7)
	head.next.next = new ListNode(7)
	head.next.next.next = new ListNode(7)

	const expected = linkedListToArray(deleteElements(head))
	expect(expected).toStrictEqual([7])
})

test('should return []', () => {
	head = null
	const expected = linkedListToArray(deleteElements(head))
	expect(expected).toStrictEqual([])
});