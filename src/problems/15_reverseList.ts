// https://leetcode.com/problems/reverse-linked-list/
import { ListNode } from "../data-structures/ListNode";

export const reverseList = (head: ListNode | null): ListNode | null => {
  let cur = head
  let prev = null;
  while (cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev;
};
