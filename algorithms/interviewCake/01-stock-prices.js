// https://www.interviewcake.com/question/javascript/stock-price

//  ==================================================  //
// Initial work through, slightly elegant brute force with a time complexity 
// of O(n^2).
// function getMaxProfits(priceArr) {
//   let i, j, maxProfit = 0
//   for(i = 0; i < priceArr.length - 1; i ++) {
//     for(j = i + 1; j < priceArr.length -1; j ++) {
//       if (priceArr[j] - priceArr[i] > maxProfit) {
//         maxProfit = priceArr[j] - priceArr[i]
//       }
//     }
//   }
//   console.log('======',maxProfit)
//   return maxProfit
// }

//  ==================================================  //
// solution with O(n) time complexity because it only goes through once. 
function getMaxProfits(priceArr) {
  if (priceArr.length < 2) {
    throw new Error('must have two prices to get profit')
  }
  
  let i
    , maxProfit = priceArr[1] - priceArr[0]
    , lowest = priceArr[0]

  for (i = 1; i < priceArr.length; i++) {
    let currentPrice = priceArr[i]
    let potentialProfit = currentPrice - lowest
    maxProfit = Math.max(maxProfit, potentialProfit)
    lowest = Math.min(lowest, currentPrice)
  }
  console.log('======',maxProfit)
  return maxProfit
}
//  ==================================================  //


var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
var stockPricesYesterday2 = [5, 10, 7, 15, 8, 11, 9];
var stockPricesYesterday3 = [10, 9, 8, 7, 6, 5, 4];

getMaxProfits(stockPricesYesterday)
getMaxProfits(stockPricesYesterday2)
getMaxProfits(stockPricesYesterday3)