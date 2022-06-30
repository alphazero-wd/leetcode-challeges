import { TreeNode } from '../../src/data-structures/TreeNode';
import { minDepth } from '../../src/problems/21_minDepth';

let root: TreeNode | null

test('should return 2', () => {
	root = new TreeNode(3)
	root.left = new TreeNode(9)
	root.right = new TreeNode(20)
	root.right.left = new TreeNode(15)
	root.right.right = new TreeNode(7)
	expect(minDepth(root)).toBe(2)
});

test('should return 5', () => {
	root = new TreeNode(2)
	root.right = new TreeNode(3)
	root.right.right = new TreeNode(4)
	root.right.right.right = new TreeNode(5)
	root.right.right.right.right = new TreeNode(6)
	expect(minDepth(root)).toBe(5)
});
test('should return 0', () => {
	root = null
	expect(minDepth(root)).toBe(0)
});