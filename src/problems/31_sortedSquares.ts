// https://leetcode.com/problems/squares-of-a-sorted-array/
export const sortedSquares = (nums: number[]): number[] => {
  let low = 0, high = nums.length - 1
  const ans = Array(nums.length)
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[low]) < nums[high]) {
      ans[i] = nums[high] ** 2
      high--
    } else {
      ans[i] = nums[low] ** 2
      low++
    }
  }
  return ans
};