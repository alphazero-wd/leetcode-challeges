import { ListNode } from '../../src/data-structures/ListNode';
import { hasCycle } from '../../src/problems/10_linkedListCycle';

let head: ListNode | null

test('should return true', () => {
	head = new ListNode(3)
	head.next = new ListNode(2)
	head.next.next = new ListNode(0)
	head.next.next.next = new ListNode(-4)
	head.next.next.next.next = head.next

	expect(hasCycle(head)).toBeTruthy()
});

test('should return true', () => {
	head = new ListNode(1)
	head.next = new ListNode(0)
	head.next.next = head
	expect(hasCycle(head)).toBeTruthy()
})
test('should return false', () => {
	head = new ListNode(1)
	expect(hasCycle(head)).toBeFalsy()
})
test('should return false', () => {
	head = null
	expect(hasCycle(head)).toBeFalsy()
})