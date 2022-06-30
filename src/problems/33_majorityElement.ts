// https://leetcode.com/problems/majority-element/
export const majorityElement = (nums: number[]): number => {
  let candidate = nums[0]
  let count = 1
  for (let num of nums) {
    if (count === 0) candidate = num
    count += candidate !== num ? -1 : 1
  }
  return candidate
};