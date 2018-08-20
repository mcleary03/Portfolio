import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showProject, setlaptopDisplay } from '../../actions'
import { projectsReducer } from '../../reducers'


class Project extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }

  navigate() {
    window.location.href=this.props.project.url
  }

  render() {
    const { id, name, github, img } = this.props.project
    return (
      <div className='project fadeIn' onClick={ ()=>this.navigate() }>
        <img 
          src={img} 
          crossOrigin='true'
          alt={`screenshot of ${name} project`}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  displayedProjects: state.projectsReducer.displayedProjects,
  laptopDisplay: state.projectsReducer.projectInfo
})

const mapDispatchToProps = dispatch => ({
  showProject: id => dispatch(showProject(id)), // add to displayedProjects array
  setlaptopDisplay: id => dispatch(setlaptopDisplay(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)