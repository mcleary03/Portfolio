import React from 'react'

export default () => {
  return (
    // <nav className="navbar navbar-inverse">
    //   <div className="container-fluid">
    //     <div className="navbar-header">
    //       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
    //         <span className="icon-bar"></span>
    //         <span className="icon-bar"></span>
    //         <span className="icon-bar"></span>
    //       </button>
    //       <a className="navbar-brand" href="#">WebSiteName</a>
    //     </div>
    //     <div className="collapse navbar-collapse" id="myNavbar">
    //       <ul className="nav navbar-nav">
    //         <li className="active"><a href="#">Home</a></li>
    //         <li className="dropdown">
    //           <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
    //           <ul className="dropdown-menu">
    //             <li><a href="#">Page 1-1</a></li>
    //             <li><a href="#">Page 1-2</a></li>
    //             <li><a href="#">Page 1-3</a></li>
    //           </ul>
    //         </li>
    //         <li><a href="#">Page 2</a></li>
    //         <li><a href="#">Page 3</a></li>
    //       </ul>
    //       <ul className="nav navbar-nav navbar-right">
    //         <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
    //         <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>


    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#Navbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Michael Cleary</a>
        </div>

        <div id="Navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="#top" className="active">
              <strong>About </strong>
              <i className="fa fa-user"></i>
            </a></li>
            <li><a href="#projects" className="">
              <strong>Projects </strong>
              <i className="fa fa-folder-open"></i>
            </a></li>
            <li><a href="#contact" className="">
              <strong>Contact </strong>
              <i className="fa fa-envelope"></i>
            </a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
