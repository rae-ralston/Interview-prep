import React from 'react'
import { connect } from 'react-redux'
import { moveLeft, moveRight } from '../actions/cards'
import '../styles/Card.css'

const Card = (props) => {
  return (
    <div className="Card">
      <p
        className="arrow"
        onClick={() => props.moveLeft(props.columnId, props.id)}
      >
        {props.firstCol ? ' ' : '<'}
      </p>
      <p>{props.content}</p>
      <p
        className="arrow"
        onClick={() => props.moveRight(props.columnId, props.id)}
      >
        {props.lastCol ? ' ' : '>'}
      </p>
    </div>
  )
}

export default connect(null, { moveLeft, moveRight })(Card)
