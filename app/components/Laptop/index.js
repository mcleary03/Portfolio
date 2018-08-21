import React, { Component } from 'react'
import style from './Laptop.scss'

export default class Laptop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      displayText: ''
    }
  }

  openLid = () => {
    this.setState({open: true})
    this.props.init()
    this.updateDisplay()
  }

  closeLid = () => {
    this.clearText()
    this.props.hideProjects()
    this.setState({open: false})
  }

  handleClick = () => {
    this.state.open ? this.closeLid() : this.openLid()
  }

  updateDisplay = () => {
    console.log('update display')
    if (this.props.display.name==='Intro') {
      this.printLines(this.props.display.description, 1000, 2000)
    } 

    const { id, name, technologies, description } = this.props.display

    // return (
    //   <div className='text'>
    //     <h2>{ name }</h2>
    //     <h3>{ technologies.join(', ') }</h3>
    //     { description.map( (s,i) => <p key={id+i}>> {s}</p> ) }
    //   </div>
    // )
    // this.printLines(this.props.display, 100, 2000)
  }

  printLines = (arr, dur, del) => {
    debugger
    setTimeout( () => {
      arr.forEach( (line, i) => {
        let len = line.length
        setTimeout( () => this.printChars(line, dur/len), dur*i+del*i )
      })
    }, del)
  }

  printChars = (str, dur) => {
    str.split('').forEach( (char, i) => {
      setTimeout( () => {
        this.setState({ displayText: this.state.displayText+char })
      }, dur*i )
    })
  }

  clearText = () => {
    this.setState({ displayText: '' })
  }

  componentDidMount() {
    
  }

  render() {
    const screenClass = this.state.open ? 'open' : 'close glow closed'
    const keyboardClass = this.state.open ? '' : 'glow'

    return (
      <div id='laptop' onClick={ this.handleClick }>
        <div id="screen" className={ screenClass }>
          <div className="text">
            { this.state.displayText }
          </div>
        </div>
        <div id="keyboard" className={ keyboardClass }></div>
      </div>
    )
  }
}
