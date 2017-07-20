import React, { Component } from 'react'
import { dispatch } from 'redux'
import changeDisplay from '../actions/actions'

   /////////////////////////////
  // COLLAPSE FEATURE BROKEN //
 /////////////////////////////

export default class Display extends Component {
  constructor() {
    super()

    this.click = this.click.bind(this)
  }

  click(event) {
    event.preventDefault()
    console.log(this.context.store)
    console.log(event.target.innerHTML)
    context.store.dispatch(changeDisplay(event.target.innerHTML))
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
              <li><a href="#top" className="">
                <strong>About </strong>
                <i className="fa fa-user"></i>
              </a></li>
            <li><a href="#projects" className="nav-item" onClick={this.click}>
                <strong>Projects </strong>
                <i className="fa fa-folder-open"></i>
              </a></li>
              <li><a href="#contact" className="nav-item">
                <strong>Contact </strong>
                <i className="fa fa-envelope"></i>
              </a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
