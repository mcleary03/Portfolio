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

    this.click = this.click.bind(this)
  }

  click(event) {
    event.preventDefault()
    this.props.setDisplay(event.target.textContent)
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">Michael Cleary</a>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#Navbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div id="Navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav nav-pills">
              <li><a className="nav-item" onClick={this.click}>
                <i className="fa fa-user"></i>
                <strong>About</strong>
              </a></li>
            <li><a className="nav-item" onClick={this.click}>
              <i className="fa fa-folder-open"></i>
                <strong>Projects</strong>
              </a></li>
              <li><a className="nav-item" onClick={this.click}>
                <i className="fa fa-envelope"></i>
                <strong>Contact</strong>
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
