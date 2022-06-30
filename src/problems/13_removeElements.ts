// https://leetcode.com/problems/remove-linked-list-elements/
import { ListNode } from "../data-structures/ListNode";

export const removeElements = (head: ListNode | null, val: number): ListNode | null => {
  const dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  let cur = head
  while (cur) {
    if (cur.val === val) prev.next = cur.next
    else prev = cur
    cur = cur.next
  }
  return dummy.next;
};