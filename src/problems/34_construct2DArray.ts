// https://leetcode.com/problems/convert-1d-array-into-2d-array/
export const construct2DArray = (original: number[], m: number, n: number): number[][] => {
  if (m * n !== original.length) return []
  const matrix = [...Array(m)].map(() => Array(n))
  for (let i = 0; i < original.length; i++) {
    matrix[Math.floor(i / n)][i % n] = original[i]
  }
  return matrix
};