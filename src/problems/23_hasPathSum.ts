// https://leetcode.com/problems/path-sum/
import { TreeNode } from "../data-structures/TreeNode";

export const hasPathSum = (root: TreeNode | null, target: number): boolean => {
  if (!root) return false
  if (target - root.val === 0 && (!root.left && !root.right)) return true;
  return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val)
};