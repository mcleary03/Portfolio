import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='header'>
        <div className='myName link'>
          <a href='https://github.com/mcleary03'>Michael Cleary</a>
        </div>
      </div>
    )
  }
}

export default Header