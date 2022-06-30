// https://leetcode.com/problems/subtree-of-another-tree/
import { TreeNode } from "../data-structures/TreeNode";

export const isSubtree = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};