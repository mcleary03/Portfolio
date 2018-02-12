import React, { Component } from 'react'
import { connect } from 'react-redux'
import { displayReducer } from '../reducers'
import Header from './Header'
import Footer from './Footer'
import Display from './Display'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id='App'>
        <Header />
        <Display className='main-display' display={this.props.display} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => (
  { display: state.displayReducer.display }
)

export default connect(mapStateToProps)(App);
