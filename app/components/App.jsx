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
        <div className="fullscreen-bg">
          <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
            <source
              src="./app/images/City_at_night__SaveYouTube_com_.mp4"
              type="video/mp4" />
          </video>
        </div>
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
