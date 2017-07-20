import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from './ProjectList'

export default class Display extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="display" className="container">
        <ProjectList />
      </div>
    )
  }
}

// THIS IS WRONG!!!!!!
// const mapStateToProps = state => ({
//   display: state.display
// });
//
// const mapDispatchToProps = dispatch => ({
// 	changeDisplay: display => dispatch(changeDisplay(display)),
// })

// NEED TO FIX THIS!!!!
// export default connect(mapStateToProps)(Display);
