// https://leetcode.com/problems/binary-search/
export const search = (nums: number[], target: number): number => {
  let low = 0, high = nums.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (nums[mid] === target) return mid
    else if (nums[mid] > target) high = mid - 1
    else low = mid + 1
  }
  return -1
};
