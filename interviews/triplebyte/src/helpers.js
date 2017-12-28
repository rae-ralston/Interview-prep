let columnId = 9
export function newCard(content){
  return {
    id: columnId += 1,
    content
  }
}

export function moveCard(state, action, direction) {
  let savedCard
  let newState = state
    .map(col => {
      if(col.id === action.columnId) {
        col.cards = col.cards.reduce((collection, card) => {
          if(card.id === action.cardId) {
            savedCard = card
            return collection
          } else {
            collection.push(card)
            return collection
          }
        }, [])
      }
      return col
    })

  newState = newState.map(col => {
    let columnDirection = direction === 'left' ? col.id + 1 : col.id - 1
    if(columnDirection === action.columnId) {
      col.cards.push(savedCard)
    }
    return col
  })

  return newState
}
