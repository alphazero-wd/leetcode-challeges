export const climbStairs = (n: number): number => {
  let prev1 = 1, prev2 = 1, ans = 1
  for (let _ = 2; _ <= n; _++) {
    ans = prev1 + prev2
    prev2 = prev1
    prev1 = ans
  }
  return ans
}
