import React, { Component } from 'react'
import Card from '../containers/Card'
import '../styles/Column.css'

class Column extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  handleInput(e){
    let inputHasWord = e.target.value.length > 0
    if(inputHasWord && (e.key === "Enter" || e.type === 'blur')) {
      this.handleSubmit(e)
    }
  }

  handleSubmit(e) {
    this.props.addCard(this.props.data.id, this.state.input)
    this.setState({input: ''})
    e.target.value = ''
  }

  render() {
    const { data } = this.props
    const cards = data.cards.map(card =>
      <Card
        key={card.id}
        id={card.id}
        content={card.content}
        columnId={data.id}
        firstCol={this.props.firstCol}
        lastCol={this.props.lastCol}
      />
    )
    const color = data.color

    return (
      <div className="column">
      <h3 className="heading" style={{backgroundColor: color, }}>{data.title}</h3>
      {cards}
      <input
        className="col-input"
        onChange={(e) => this.setState({input: e.target.value})}
        onBlur={(e) => this.handleInput(e)}
        onKeyPress={(e) => this.handleInput(e)}
        placeholder="+ add a card"
      />
      </div>
    )
  }
}

export default Column
