function getMaxProfit(stockPricesYesterday) {

  // Check to make sure there is more than one stock price
  if (stockPricesYesterday.length < 2) {
    throw new Error("There must be at least 2 stock prices!");
  }

  // Use minPrice to keep track of lowest point in stock
  // Use maxProfit to keep track of highest possible profit
  var minPrice = stockPricesYesterday[0];
  var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  // Loop through stock prices starting at the second price(index == 1)
  // Accounts for negative profits and not buying and selling at same time
  for (var i = 1; i < stockPricesYesterday.length; i++) {
    var currentPrice = stockPricesYesterday[i];

    // see what our profit would be if we bought at the
    // min price and sold at the current price
    var potentialProfit = currentPrice - minPrice;

    // update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);

    // update minPrice so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

var stockPricesYesterday = [10, 7, 5, 8, 11, 9, 4];
console.log(getMaxProfit(stockPricesYesterday));
