import { ListNode } from '../../src/data-structures/ListNode';
import { mergeTwoLists } from '../../src/problems/16_mergeTwoLists';
import { linkedListToArray } from '../../src/utils/linkedListToArray';

let list1: ListNode | null
let list2: ListNode | null
test('should return [1,1,2,3,4,4]', () => {
	list1 = new ListNode(1)
	list1.next = new ListNode(2)
	list1.next.next = new ListNode(4)

	list2 = new ListNode(1)
	list2.next = new ListNode(3)
	list2.next.next = new ListNode(4)
	const expected = linkedListToArray(mergeTwoLists(list1, list2))
	expect(expected).toStrictEqual([1, 1, 2, 3, 4, 4])
});

test('should return []', () => {
	list1 = null
	list2 = null

	const expected = linkedListToArray(mergeTwoLists(list1, list2))
	expect(expected).toStrictEqual([])
});

test('should return [0]', () => {
	list1 = null
	list2 = new ListNode(0)

	const expected = linkedListToArray(mergeTwoLists(list1, list2))
	expect(expected).toStrictEqual([0])
});