import React, { Component } from 'react'
import { connect } from 'react-redux'
import displayReducer from '../reducers'
import Header from './Header'
import Display from './Display'

class App extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div>
        <Header />
        <Display display={this.props.display} vr={true} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {display: state.displayReducer.display}
}

export default connect(mapStateToProps)(App);
