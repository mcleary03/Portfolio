import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Display from './Display'
class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div id='App'>
        <Header />
        <Display />
        <Footer />
      </div>
    )
  }
}

export default App
