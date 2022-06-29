import { ListNode } from "../data-structures/ListNode";

export const linkedListToArray = (head: ListNode | null): number[] => {
  let cur = head
  const arr = []
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  return arr
}