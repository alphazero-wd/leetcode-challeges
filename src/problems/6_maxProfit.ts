const maxProfit = (prices: number[]): number => {
  let minPrice = Infinity
  let maxPrice = -Infinity
  for (let price of prices) {
    minPrice = Math.min(minPrice, price)
    maxPrice = Math.max(maxPrice, price - minPrice)
  }
  return maxPrice
};

export { maxProfit };