import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducers from '../reducers'

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const store = createStore(reducers)
  const root = document.getElementById("root")
  ReactDOM.render(<Root store={store} />, root)
})
