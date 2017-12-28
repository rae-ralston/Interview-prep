import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './styles/index.css'
import App from './containers/App'
import { cards } from './reducers/cards'

const store = createStore(cards)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
