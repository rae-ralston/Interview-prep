import React, { Component } from 'react'
import '../styles/App.css'
import Column from '../components/Column'

import { connect } from 'react-redux'
import { addCard } from '../actions/cards'

class App extends Component {
  render() {
    let columns = this.props.data.map((col, i) =>
      <Column
        key={col.id}
        data={col}
        addCard={this.props.addCard}
        lastCol={i === this.props.data.length - 1}
        firstCol={i === 0}
      />
    )
    return (
      <div className="app">
        {columns}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps, { addCard })(App)
