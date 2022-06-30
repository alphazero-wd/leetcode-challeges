import { TreeNode } from '../../src/data-structures/TreeNode';
import { isSubtree } from '../../src/problems/28_isSubtree';

let root: TreeNode | null
let subRoot: TreeNode | null

test('should return true', () => {
	root = new TreeNode(3)
	root.left = new TreeNode(4)
	root.right = new TreeNode(5)
	root.left.left = new TreeNode(1)
	root.left.right = new TreeNode(2)

	subRoot = new TreeNode(4)
	subRoot.left = new TreeNode(1)
	subRoot.right = new TreeNode(2)

	expect(isSubtree(root, subRoot)).toBeTruthy()
});

test('should return false', () => {
	root = new TreeNode(3)
	root.left = new TreeNode(4)
	root.right = new TreeNode(5)
	root.left.left = new TreeNode(1)
	root.left.right = new TreeNode(2)
	root.left.right.left = new TreeNode(0)

	subRoot = new TreeNode(4)
	subRoot.left = new TreeNode(1)
	subRoot.right = new TreeNode(2)

	expect(isSubtree(root, subRoot)).toBeFalsy()
});