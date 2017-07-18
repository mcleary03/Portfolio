import React, { Component } from 'react'
import Header from './Header'
import Display from './Display'

export default class App extends Component {
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
