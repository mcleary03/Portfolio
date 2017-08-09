import React, { Component } from 'react'

export default class Contact extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='text-center'>
        <div className='main-text'>
          <h1>Contact Me</h1>
          <p>I am seeking opportunities to grow as a developer.</p>
        </div>

        <div className='main-text'>
          <a href='mailto:mcleary03@gmail.com'>mcleary03@gmail.com</a>
        </div>

        <div className='row'>
          <a href='https://github.com/mcleary03'>Github<i className='link fa fa-github' /></a>
          <a href='https://www.linkedin.com/in/michaelgcleary/'>Linkedin<i className='link fa fa-linkedin-square' /></a>
        </div>
      </div>
    )
  }
}
