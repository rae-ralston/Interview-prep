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

  describe('insertFirst', () => {

    it('Inserts a node with the provided data to the head of the list', () => {
      const aLinkedList = new LinkedList()

      expect(() => aLinkedList.insertFirst('foo'))
        .to.alter(() => aLinkedList.size(), { from: 0, to: 1 })
      expect(() => aLinkedList[0].to.equal('foo'))
    })
