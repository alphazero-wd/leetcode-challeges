import { TreeNode } from '../../src/data-structures/TreeNode';
import { isSameTree } from '../../src/problems/22_isSameTree';

let p: TreeNode | null
let q: TreeNode | null

test('should return true', () => {
	p = new TreeNode(1)
	p.left = new TreeNode(2)
	p.right = new TreeNode(3)

	q = new TreeNode(1)
	q.left = new TreeNode(2)
	q.right = new TreeNode(3)

	expect(isSameTree(p, q)).toBeTruthy()
});

test('should return false', () => {
	p = new TreeNode(1)
	p.left = new TreeNode(2)

	q = new TreeNode(1)
	q.right = new TreeNode(2)

	expect(isSameTree(p, q)).toBeFalsy()
});

test('should return false', () => {
	p = new TreeNode(1)
	p.left = new TreeNode(2)
	p.right = new TreeNode(1)

	q = new TreeNode(1)
	q.left = new TreeNode(1)
	q.right = new TreeNode(2)

	expect(isSameTree(p, q)).toBeFalsy()
});

test('should return true', () => {
	p = null
	q = null
	expect(isSameTree(p, q)).toBeTruthy()
});

test('should return false', () => {
	p = null
	q = new TreeNode(2)
	expect(isSameTree(p, q)).toBeFalsy()
});