import { ADD_CARD, MOVE_LEFT, MOVE_RIGHT} from '../constants'
import data from '../data/data'
import { newCard, moveCard } from '../helpers'

export function cards(state=data, action) {
  switch (action.type) {
    case ADD_CARD:
      return state.map(column => {
        if(column.id === action.columnId) {
          column.cards = [...column.cards, newCard(action.text)]
        }
        return column
      })

    case MOVE_LEFT:
      return moveCard(state, action, 'left')

    case MOVE_RIGHT:
      return moveCard(state, action, 'right')

    default:
      return state
  }
}
