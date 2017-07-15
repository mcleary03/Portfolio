import React from 'react'

export default () => {
  return (
    <nav className="row fixed-top bg-primary">
      <a href="#top" className="btn btn-primary col-md-4"><strong>About </strong><i className="fa fa-user"></i></a>
      <a href="#projects" className="btn btn-primary col-md-4"><strong>Projects </strong><i className="fa fa-folder-open"></i></a>
      <a href="#contact" className="btn btn-primary col-md-4" ><strong>Contact </strong><i className="fa fa-envelope"></i></a>
    </nav>
  )
}
