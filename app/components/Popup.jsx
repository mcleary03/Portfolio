import React, { Component } from 'react'

const iframe = url => <iframe src={ url } frameBorder="0"></iframe>

class Popup extends Component {
  constructor(props) {
    super(props)
    const { children, project } = props
    const { id, url } = project
    
    this.state = {
      output: url ? iframe(url) : children,
      position: id
    }
  }

  render() {
    const { position, output } = this.state
    return (
      <div id={`popup${ position }`} className='popup'>
        { output }
      </div>
    )
  }
}

export default Popup