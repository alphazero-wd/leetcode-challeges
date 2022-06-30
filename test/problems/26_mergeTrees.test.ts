import { TreeNode } from '../../src/data-structures/TreeNode';
import { mergeTrees } from '../../src/problems/26_mergeTrees';
import { treeToArray } from '../../src/utils/treetoArray'

let root1: TreeNode | null
let root2: TreeNode | null
test('should return [5, 4, 4, 3, 5, 7]', () => {
	root1 = new TreeNode(1)
	root1.left = new TreeNode(3)
	root1.left.left = new TreeNode(5)
	root1.right = new TreeNode(2)

	root2 = new TreeNode(2)
	root2.left = new TreeNode(1)
	root2.left.right = new TreeNode(4)
	root2.right = new TreeNode(3)
	root2.right.right = new TreeNode(7)
	const expected = treeToArray(mergeTrees(root1, root2))
	expect(expected).toStrictEqual([5, 4, 4, 3, 5, 7])
});

test('should return [2, 2]', () => {
	root1 = new TreeNode(1)

	root2 = new TreeNode(1)
	root2.left = new TreeNode(2)
	const expected = treeToArray(mergeTrees(root1, root2))
	expect(expected).toStrictEqual([2, 2])
});