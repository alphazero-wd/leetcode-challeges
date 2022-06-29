// https://leetcode.com/problems/contains-duplicate/

const containsDuplicates = (nums: number[]): boolean => {
  const dup = new Set()
  for (let num of nums) {
    if (dup.has(num)) return true;
    dup.add(num)
  }
  return false;
}
export { containsDuplicates };