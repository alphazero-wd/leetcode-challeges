// https://leetcode.com/problems/middle-of-the-linked-list/
import { ListNode } from "../data-structures/ListNode";

const middleNode = (head: ListNode | null): ListNode | null => {
  let fast = head, slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow!.next
  }
  return slow;
};

export { middleNode };