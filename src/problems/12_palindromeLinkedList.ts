import { ListNode } from "../data-structures/ListNode";

// https://leetcode.com/problems/palindrome-linked-list/
const isPalindrome = (head: ListNode | null): boolean => {
  let fast = head, slow = head
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow!.next
  }
  let rev = reverseLinkedList(slow)
  while (head && rev) {
    if (head.val !== rev.val) return false
    rev = rev.next
    head = head.next
  }
  return true;
};

const reverseLinkedList = (head: ListNode | null, prev: ListNode | null = null): ListNode | null => {
  if (!head) return prev
  let next = head.next
  head.next = prev
  return reverseLinkedList(next, head)
}

export { isPalindrome };