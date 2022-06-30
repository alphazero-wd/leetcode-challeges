// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

import { ListNode } from "../data-structures/ListNode";

export const deleteElements = (head: ListNode | null): ListNode | null => {
  const dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy, cur = head
  let dup = new Set()
  while (cur) {
    if (dup.has(cur.val)) prev.next = cur.next
    else prev = cur
    dup.add(cur.val)
    cur = cur.next
  }
  return dummy.next
};
