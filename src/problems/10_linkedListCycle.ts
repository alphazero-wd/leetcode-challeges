// https://leetcode.com/problems/linked-list-cycle/
import { ListNode } from "../data-structures/ListNode";

const hasCycle = (head: ListNode | null): boolean => {
  let fast = head, slow = head
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow!.next
    if (fast === slow) return true;
  }
  return false
};

export { hasCycle };