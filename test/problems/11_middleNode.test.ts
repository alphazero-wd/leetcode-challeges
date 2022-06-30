import { ListNode } from '../../src/data-structures/ListNode';
import { middleNode } from '../../src/problems/11_middleNode';

let head: ListNode | null
test('should return node whose value is 3', () => {
	let node1 = new ListNode(2)
	let node2 = new ListNode(3)
	let node3 = new ListNode(4)
	let node4 = new ListNode(5)
	head = new ListNode(1)
	head.next = node1
	node1.next = node2
	node2.next = node3
	node3.next = node4
	expect(middleNode(head)).toMatchObject(node2)
})
test('should return node whose value is 4', () => {
	let node1 = new ListNode(2)
	let node2 = new ListNode(3)
	let node3 = new ListNode(4)
	let node4 = new ListNode(5)
	let node5 = new ListNode(6)
	head = new ListNode(1)
	head.next = node1
	node1.next = node2
	node2.next = node3
	node3.next = node4
	node4.next = node5
	expect(middleNode(head)).toMatchObject(node3)
})