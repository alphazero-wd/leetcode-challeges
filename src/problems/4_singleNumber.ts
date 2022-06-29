// https://leetcode.com/problems/single-number/

const singleNumber = (nums: number[]): number => {
  return nums.reduce((res, num) => res ^ num, 0)
}
export { singleNumber }