import { TreeNode } from '../../src/data-structures/TreeNode';
import { averageOfLevels } from '../../src/problems/20_averageOfLevels';

let root: TreeNode | null
test('should [3, 14.5, 11]', () => {
	root = new TreeNode(3)
	root.left = new TreeNode(9)
	root.right = new TreeNode(20)
	root.right.left = new TreeNode(15)
	root.right.right = new TreeNode(7)
	expect(averageOfLevels(root)).toStrictEqual([3, 14.5, 11])
});

test('should [3]', () => {
	root = new TreeNode(3)
	expect(averageOfLevels(root)).toStrictEqual([3])
});