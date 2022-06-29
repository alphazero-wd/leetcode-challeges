// https://leetcode.com/problems/range-sum-query-immutable/

class NumArray {
  prefixSum: number[];
  constructor(nums: number[]) {
    this.prefixSum = nums
    for (let i = 1; i < nums.length; i++) {
      this.prefixSum[i] += this.prefixSum[i - 1] as number
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) return this.prefixSum[right] as number
    return (this.prefixSum[right] as number) - (this.prefixSum[left - 1] as number)
  }
}

export { NumArray }