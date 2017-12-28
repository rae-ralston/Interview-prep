import { ADD_CARD, MOVE_LEFT, MOVE_RIGHT} from '../constants'

export function addCard(columnId, text) {
  return {
    type: ADD_CARD,
    columnId,
    text
  }
}

export function moveRight(columnId, cardId) {
  return {
    type: MOVE_RIGHT,
    columnId,
    cardId
  }
}

export function moveLeft(columnId, cardId) {
  return {
    type: MOVE_LEFT,
    columnId,
    cardId
  }
}
