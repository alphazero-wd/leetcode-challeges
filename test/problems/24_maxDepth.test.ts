import { TreeNode } from '../../src/data-structures/TreeNode';
import { maxDepth } from '../../src/problems/24\_maxDepth';

let root: TreeNode | null

test('should return 3', () => {
	root = new TreeNode(3)
	root.left = new TreeNode(9)
	root.right = new TreeNode(20)
	root.right.left = new TreeNode(15)
	root.right.right = new TreeNode(7)
	expect(maxDepth(root)).toBe(3)
});

test('should return 2', () => {
	root = new TreeNode(1)
	root.right = new TreeNode(2)
	expect(maxDepth(root)).toBe(2)
});

test('should return 0', () => {
	root = null
	expect(maxDepth(root)).toBe(0)
});

test('should return 1', () => {
	root = new TreeNode(1)
	expect(maxDepth(root)).toBe(1)
});