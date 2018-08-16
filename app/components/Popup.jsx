import React, { Component } from 'react'

const iframe = url => <iframe src={ url } frameBorder="0"></iframe>

class Popup extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      output: props.url ? iframe(props.url) : props.children,
      position: props.pos
    }
    console.log('state', this.state)
  }

  displayInfo() {
    // take text from redux object regarding the project from the props
    // display text inside laptop screen text component
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