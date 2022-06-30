// https://leetcode.com/problems/minimum-depth-of-binary-tree/
import { TreeNode } from "../data-structures/TreeNode";

export const minDepth = (root: TreeNode | null): number => {
  if (!root) return 0
  const left = minDepth(root.left)
  const right = minDepth(root.right)
  return (!root.left || !root.right) ? 1 + left + right : 1 + Math.min(left, right)
};
