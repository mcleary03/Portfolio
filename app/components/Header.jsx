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
      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <a className="navbar-brand" onClick={this.click}>Michael Cleary</a>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#Navbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div id="Navbar" className="collapse navbar-collapse" onClick={this.click}>
            <ul className="nav navbar-nav nav-pills nav-fill">
              <li className="nav-item"><a>
                <i className="fa fa-question"></i>
                <strong>About</strong>
              </a></li>
              <li className="nav-item"><a>
                <i className="fa fa-folder-open"></i>
                <strong>Projects</strong>
              </a></li>
              <li className="nav-item"><a>
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
