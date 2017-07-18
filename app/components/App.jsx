import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Display from './Display'
// import Store from '../store'

class App extends Component {
  constructor() {
    super()
  }
  render () {
    return (
      <div>
        <Header />
        <Display />
      </div>
    )
  }
}


// Makes sure page is loaded before rendering anything
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app")
  ReactDOM.render(<App />, app)
})
