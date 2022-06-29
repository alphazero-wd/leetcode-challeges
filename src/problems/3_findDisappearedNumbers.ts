// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const findDisappearedNumbers = (nums: number[]): number[] => {
  for (let num of nums) {
    const index = Math.abs(num) - 1
    nums[index] = -Math.abs(nums[index] as number)
  }
  return nums.map((num, i) => num > 0 ? i + 1 : num).filter((num) => num > 0)
}

export { findDisappearedNumbers }