import React, { Component } from 'react'
import { connect } from 'react-redux'
import displayReducer from '../reducers'
import { setDisplay } from '../actions'

   ////////////////////////////
  // COLLAPSED MENU  BROKEN //
 ////////////////////////////

class Header extends Component {
  constructor() {
    super()

    this.changeDisplay = this.changeDisplay.bind(this)
  }

  changeDisplay(event) {
    event.preventDefault()
    this.props.setDisplay(event.target.textContent)
  }

  toggleVR(event) {
    event.preventDefault()
    this.props.vr
  }

  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <a className="navbar-brand" onClick={this.changeDisplay}>Michael Cleary</a>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#Navbar">
              <i className='fa fa-bars' />
            </button>
          </div>

          <div id="Navbar" className="collapse navbar-collapse flex">
            <ul className="nav navbar-nav nav-pills nav-justify" onClick={this.changeDisplay}>
              <li className="nav nav-item"><a className='nav-link '>
                <i className="fa fa-info-circle"/>
                <strong>About</strong>
              </a></li>
            <li className="nav-item"><a className='nav-link '>
                <i className="fa fa-folder-open"/>
                <strong>Projects</strong>
              </a></li>
              <li className="nav-item"><a className='nav-link '>
                <i className="fa fa-envelope"/>
                <strong>Contact</strong>
              </a></li>
              <li className="nav-item"><a className='nav-link '>
                <i className="fa fa-code"/>
                <strong>AFrame</strong>
              </a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  // CAN I ACCESS PROJECTS THROUGH PROPS FROM STORE INSTEAD?
  return {display: state.displayReducer.display}
}

const mapDispatchToProps = dispatch => (
  { setDisplay: display => dispatch(setDisplay(display)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
