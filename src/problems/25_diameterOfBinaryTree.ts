// https://leetcode.com/problems/diameter-of-binary-tree/
import { TreeNode } from "../data-structures/TreeNode";

export const diameterOfBinaryTree = (root: TreeNode | null): number => {
  let ans = 0
  const maxDepth = (root: TreeNode | null): number => {
    if (!root) return 0
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    ans = Math.max(ans, left + right)
    return 1 + Math.max(left, right)
  }
  maxDepth(root)
  return ans
};