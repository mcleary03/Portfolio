import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showProject, hideProjects, setlaptopDisplay } from '../../actions'
import { projectsReducer } from '../../reducers'
import style from './Laptop.scss'

class Laptop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      name: '',
      technologies: '',
      description: '',
    }
  }

  openLid = () => {
    document.querySelector('body').classList.remove('darken')
    document.querySelector('body').classList.add('lighten')
    this.setState({open: true})
    this.props.init()
    this.updateDisplay()
  }

  closeLid = () => {
    document.querySelector('body').classList.remove('lighten')
    document.querySelector('body').classList.add('darken')
    this.props.hideProjects()
    this.setState({open: false})
  }

  handleClick = () => {
    this.state.open ? this.closeLid() : this.openLid()
  }

  updateDisplay = (location, delay=0) => {
    this.clearText()
    // if (this.props.display.name==='My Portfolio') {
      this.printLines(this.props.laptopDisplay, location, 1000, delay)
    // } 

    // return (
    //   <div className='text'>
    //     <h2>{ name }</h2>
    //     <h3>{ technologies.join(', ') }</h3>
    //     { description.map( (s,i) => <p key={id+i}>> {s}</p> ) }
    //   </div>
    // )
    // this.printLines(this.props.display, 100, 2000)
  }

  printLines = (display, interval, delay) => {
    setTimeout( () => {
      Object.keys(display).forEach( (key, i) => {
        setTimeout( () => {
          this.printChars(display[key], key, interval/display[key].length)
        }, interval*i*1.7)
      })
    }, delay)
  }

  printChars = (str, location, interval) => {
    str.split('').forEach( (char, i) => {
      setTimeout( () => {
        this.setState({ [location]: this.state[location]+char })
      }, interval*i )
    })
  }

  clearText = () => {
    this.setState({ name: '', technologies: '', description: '' })
  }

  componentDidMount() {

  }

  render() {
    const screenClass = this.state.open ? 'open' : 'close glow closed'
    const keyboardClass = this.state.open ? '' : 'glow'
    const { name, technologies, description } = this.props.laptopDisplay

    return (
      <div id='laptop' onClick={ this.handleClick }>
        <div id="screen" className={ screenClass }>
          <div className='text'>
            <h2>{ name }</h2>
            <p>{ technologies }</p>
            {description.split('. ').map(s=><p key={s.slice(0,6)}>{s}</p>)}
          </div>
        </div>
        <div id="keyboard" className={ keyboardClass }></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  laptopDisplay: state.projectsReducer.laptopDisplay
})

const mapDispatchToProps = dispatch => ({
  showProject: id => dispatch(showProject(id)),
  hideProjects: id => dispatch(hideProjects(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Laptop)