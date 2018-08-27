import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='header'>
        <div className='link'>
          <a href='https://github.com/mcleary03'><h1>Michael Cleary</h1></a>
        </div>
        <div className='social'>
          <a className='github' href='https://github.com/mcleary03'>
            <img src="https://cdn.glitch.com/e66d812d-475c-4f51-a0ac-6dc63a7d203b%2FGitHub-Mark-Light-64px.png?1535389174449"/>
          </a>
          <a className='linkedin' href='https://www.linkedin.com/in/michaelgcleary/'>
            <img src="https://cdn.glitch.com/e66d812d-475c-4f51-a0ac-6dc63a7d203b%2FIn-White-66px-R.png?1535390529170"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Header