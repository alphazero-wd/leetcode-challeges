import { TreeNode } from '../../src/data-structures/TreeNode';
import { lowestCommonAncestor } from '../../src/problems/27_lowestCommonAncestor';

let root: TreeNode
let p: TreeNode
let q: TreeNode

test('should return node whose value is 6', () => {
	root = new TreeNode(6)
	root.left = new TreeNode(2)
	root.right = new TreeNode(8)
	root.right.left = new TreeNode(7)
	root.right.right = new TreeNode(9)
	root.left.left = new TreeNode(0)
	root.left.right = new TreeNode(4)
	root.left.right.left = new TreeNode(3)
	root.left.right.right = new TreeNode(5)
	p = new TreeNode(2)
	q = new TreeNode(8)
	expect(lowestCommonAncestor(root, p, q)!.val).toBe(6)
});

test('should return node whose value is 2', () => {
	root = new TreeNode(6)
	root.left = new TreeNode(2)
	root.right = new TreeNode(8)
	root.right.left = new TreeNode(7)
	root.right.right = new TreeNode(9)
	root.left.left = new TreeNode(0)
	root.left.right = new TreeNode(4)
	root.left.right.left = new TreeNode(3)
	root.left.right.right = new TreeNode(5)
	p = new TreeNode(2)
	q = new TreeNode(4)
	expect(lowestCommonAncestor(root, p, q)!.val).toBe(2)
});

test('should return node whose value is 2', () => {
	root = new TreeNode(2)
	root.left = new TreeNode(1)
	p = new TreeNode(2)
	q = new TreeNode(1)
	expect(lowestCommonAncestor(root, p, q)!.val).toBe(2)
});