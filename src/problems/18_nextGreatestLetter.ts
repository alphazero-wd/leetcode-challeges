// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
export const nextGreatestLetter = (letters: string[], target: string): string => {
  const n = letters.length
  if (target >= letters[n - 1] || target < letters[0]) return letters[0]
  let low = 0, high = n - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (letters[mid] > target) high = mid - 1
    else low = mid + 1
  }
  return letters[low]
};