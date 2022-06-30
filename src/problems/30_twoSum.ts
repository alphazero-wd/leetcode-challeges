// https://leetcode.com/problems/two-sum/
export const twoSum = (nums: number[], target: number): [number, number] => {
  const hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (hashMap.has(complement)) return [hashMap.get(complement), i]
    hashMap.set(nums[i], i)
  }
  return [-1, -1]
};