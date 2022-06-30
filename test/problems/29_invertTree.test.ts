import { TreeNode } from '../../src/data-structures/TreeNode';
import { invertTree } from '../../src/problems/29_invertTree';
import { treeToArray } from '../../src/utils/treetoArray'

let root: TreeNode

test('should return [9, 7, 6, 4, 3, 2, 1]', () => {
	root = new TreeNode(4)
	root.left = new TreeNode(2)
	root.left.left = new TreeNode(1)
	root.left.right = new TreeNode(3)

	root.right = new TreeNode(7)
	root.right.left = new TreeNode(6)
	root.right.right = new TreeNode(9)
	const expected = treeToArray(invertTree(root))
	expect(expected).toStrictEqual([9, 7, 6, 4, 3, 2, 1])
});

test('should return [3, 2, 1]', () => {
	root = new TreeNode(2)
	root.left = new TreeNode(1)
	root.right = new TreeNode(3)

	const expected = treeToArray(invertTree(root))
	expect(expected).toStrictEqual([3, 2, 1])
});