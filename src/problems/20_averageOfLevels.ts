// https://leetcode.com/problems/average-of-levels-in-binary-tree/
import { Queue } from "../data-structures/Queue";
import { TreeNode } from "../data-structures/TreeNode";

export const averageOfLevels = (root: TreeNode | null): number[] => {
  if (!root) return []
  const queue = new Queue<TreeNode>();
  const ans = []
  queue.enqueue(root)
  while (!queue.isEmpty) {
    let sum = 0
    let size = queue.size
    for (let _ = 0; _ < size; _++) {
      const cur = queue.dequeue()
      sum += cur.val
      if (cur.left) queue.enqueue(cur.left)
      if (cur.right) queue.enqueue(cur.right)
    }
    ans.push(sum / size)
  }
  return ans
};