export const maxSubArray = (nums: number[]): number => {
  let maxSum = -Infinity
  let currentSum = -Infinity
  for (let num of nums) {
    currentSum = Math.max(currentSum + num, num)
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum
};
