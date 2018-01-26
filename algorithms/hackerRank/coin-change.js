// from https://www.hackerrank.com/challenges/coin-change

function getWays(n, c){
    let sortedCoins = c.sort((a, b) => a - b).reverse()
    console.log(n, sortedCoins)
    let coinList = []
    // is arr[0] *2 > n?

}


getWays(10, [ 2, 5, 3, 6 ])
getWays(4, [ 1, 2, 3 ])
