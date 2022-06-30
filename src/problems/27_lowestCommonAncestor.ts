// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
import { TreeNode } from "../data-structures/TreeNode";

export const lowestCommonAncestor = (root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null => {
  if (!root) return null
  if (root.val === p.val || root.val === q.val) return root
  if (Math.max(p.val, q.val) < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (Math.min(p.val, q.val) > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root;
};