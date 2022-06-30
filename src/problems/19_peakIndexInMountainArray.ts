// https://leetcode.com/problems/peak-index-in-a-mountain-array/
export const peakIndexInMountainArray = (nums: number[]): number => {
  const n = nums.length
  let low = 1, high = n - 2
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid
    else if (nums[mid] < nums[mid - 1]) high = mid - 1
    else low = mid + 1
  }
  return -1
};
