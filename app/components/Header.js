import React from 'react'

export default () => {
  return (
    <nav className="navbar navbar-inverse bg-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Michael Cleary</a>
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
            <li><a href="#projects" className="nav-item">
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
