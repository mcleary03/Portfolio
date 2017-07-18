import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
// import reducers from '../reducers'
import displayReducer from '../reducers/displayReducer'

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const store = createStore(displayReducer)
  const app = document.getElementById("root")
  ReactDOM.render(<Root store={store} />, root)
})
