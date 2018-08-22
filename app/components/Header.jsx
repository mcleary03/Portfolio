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
      </div>
    )
  }
}

export default Header