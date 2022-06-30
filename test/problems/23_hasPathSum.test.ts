import { TreeNode } from '../../src/data-structures/TreeNode';
import { hasPathSum } from '../../src/problems/23\_hasPathSum';

let root: TreeNode | null

test('should return true', () => {
	root = new TreeNode(5)
	root.left = new TreeNode(4)
	root.right = new TreeNode(8)
	root.right.left = new TreeNode(13)
	root.right.right = new TreeNode(4)
	root.right.right.right = new TreeNode(1)
	root.left.left = new TreeNode(11)
	root.left.left.left = new TreeNode(7)
	root.left.left.right = new TreeNode(2)
	expect(hasPathSum(root, 22)).toBeTruthy()
});

test('should return false', () => {
	root = new TreeNode(1)
	root.left = new TreeNode(2)
	root.right = new TreeNode(3)
	expect(hasPathSum(root, 5)).toBeFalsy()
});

test('should return false', () => {
	root = null
	expect(hasPathSum(root, 0)).toBeFalsy()
});