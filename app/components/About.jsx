import React, { Component } from 'react'

export default class About extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='about container text-center'>
        <div className='col-md-6 col-sm-12'>
          <h1>Michael Cleary</h1>
          <img className='img-circle' src='../app/images/profile_pic.png'/>
        </div>
        <div className='col-md-6 col-sm-12'>
          <h2>Skills</h2>
          <div className='col-sm-4'>
            <div>JavaScript</div>
            <div>React</div>
            <div>Redux</div>
            <div>Node</div>
            <div>Express</div>
            <div>Passport</div>
          </div>
          <div className='col-sm-4'>
            <div>Ruby</div>
            <div>Rails</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>Bootstrap</div>
          </div>
          <div className='col-sm-4'>
            <div>SQL</div>
            <div>PostgreSQL</div>
            <div>MongoDB</div>
          </div>
        </div>
      </div>
    )
  }
}

// /Users/mcleary/Desktop/portfolio/app/images/profile_pic.png
