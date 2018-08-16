import React, { Component } from 'react'
import { connect } from 'react-redux'
import { projectsReducer } from '../reducers'
import Header from './Header'
import Footer from './Footer'
import Display from './Display'
import Laptop from './Laptop'
import Popup from './Popup'
import Btns from './Btns'
class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div id='App'>
        <Header />
        <div id="main">
          <Laptop/>
          <Popup pos='1'
            url="https://mcleary03.github.io/dotty/"/>
          <Popup pos='2'>
            <Btns />
          </Popup>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // laptopDisplay: state.projectsReducer.project,
})

export default connect(mapStateToProps)(App);
