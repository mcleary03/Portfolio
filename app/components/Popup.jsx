import React, { Component } from 'react'

class Popup extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { project } = this.props
    return (
      <div className='popup'>
        { project }
      </div>
    )
  }
}

export default Popup