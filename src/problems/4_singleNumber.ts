// https://leetcode.com/problems/single-number/

export const singleNumber = (nums: number[]): number => {
  return nums.reduce((res, num) => res ^ num, 0)
}