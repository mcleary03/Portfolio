import React, { Component } from 'react'
import { connect } from 'react-redux'
import { displayReducer } from '../reducers'
import Header from './Header'
import Footer from './Footer'
import Display from './Display'
import Laptop from './Laptop'
import Popup from './Popup'

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div id='App'>
        <Header />
        <div id="main">
            <Laptop></Laptop>
          <div id="popup1">
            <Popup></Popup>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => (
  { display: state.displayReducer.display }
)

export default connect(mapStateToProps)(App);
