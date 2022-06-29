// https://leetcode.com/problems/missing-number/

const missingNumber = (nums: number[]): number => {
  return nums.reduce((res, num, index) => res ^ num ^ index, nums.length);
}
export { missingNumber }