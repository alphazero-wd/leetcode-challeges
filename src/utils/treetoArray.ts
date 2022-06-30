import { TreeNode } from "../data-structures/TreeNode";

export const treeToArray = (root: TreeNode | null) => {
  const res = []
  const inorder = (root: TreeNode | null) => {
    if (!root) return
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
}