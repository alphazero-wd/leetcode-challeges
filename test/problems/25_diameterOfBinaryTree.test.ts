import { TreeNode } from '../../src/data-structures/TreeNode';
import { diameterOfBinaryTree } from '../../src/problems/25_diameterOfBinaryTree';

let root: TreeNode | null

test('should return 3', () => {
	root = new TreeNode(1)
	root.left = new TreeNode(2)
	root.right = new TreeNode(3)
	root.left.left = new TreeNode(4)
	root.left.right = new TreeNode(5)
	expect(diameterOfBinaryTree(root)).toBe(3)
});

test('should return 1', () => {
	root = new TreeNode(1)
	root.left = new TreeNode(2)
	expect(diameterOfBinaryTree(root)).toBe(1)
});