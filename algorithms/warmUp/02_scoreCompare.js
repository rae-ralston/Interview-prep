//Jan 11th 2017
var alice = [5,6,7]
var bob = [3,6,10]

let scoreCompare = (scoreA, scoreB) => {
  let aFinalScore = 0
  let bFinalScore = 0
  for(let i = 0; i <= scoreA.length; i++){
    if(scoreA[i] < scoreB[i]) {
      bFinalScore += 1
    } else if (scoreA[i] > scoreB[i]) {
      aFinalScore += 1
    }
  }
  return aFinalScore + " " + bFinalScore  
}

scoreCompare(alice, bob)

/*I got this one pretty quickly.  it felt easy to compare the indicies of each 
score and see which was larger, then add that to a score counter.

TODO: what's the O(n) on this? */

