import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showProject, setlaptopDisplay } from '../actions'
import { projectsReducer } from '../reducers'
import Laptop from './Laptop'
import Project from './Project'
import Btns from './Btns'

const displayInfo = pos => {
  // take text from redux object regarding the project from the props
  console.log('hovering ' + pos)
  // display text inside laptop screen text component
}

class Display extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  displayProjects() {
    const { displayedProjects } = this.props
    if (displayedProjects) {
      return displayedProjects.map( project => (
        <Project key={ project.id } project={ project }/>
      ))
    }
  }

  init() {
    console.log('calling init()')
    let i=1
    let timer = setInterval( () => {
      this.props.showProject(i++)
      this.setState({ popups: this.props.displayedProjects })
    }, 2000)
    setTimeout( () => clearInterval(timer), 6000 )
  }

  componentDidMount() {
    // this.init() //// JUST FOR TESTING!!!!!
  }

  render() {
    return (
      <div id='main'>
        <Laptop 
          init={ () => this.init() }
          display={ this.props.laptopDisplay.description }
        />
        <div id='projects'>
          { this.displayProjects() }
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  displayedProjects: state.projectsReducer.displayedProjects,
  laptopDisplay: state.projectsReducer.laptopDisplay
})

const mapDispatchToProps = dispatch => ({
  showProject: id => dispatch(showProject(id)), // add to displayedProjects array
  setlaptopDisplay: id => dispatch(setlaptopDisplay(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Display)
