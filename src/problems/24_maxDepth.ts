// https://leetcode.com/problems/maximum-depth-of-binary-tree/
import { TreeNode } from "../data-structures/TreeNode";

export const maxDepth = (root: TreeNode | null): number => {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};