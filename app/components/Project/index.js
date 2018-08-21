import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setlaptopDisplay } from '../../actions'
import { projectsReducer } from '../../reducers'


class Project extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }

  handleHover() {
    console.log(this.props.project.id)
    this.props.setlaptopDisplay(this.props.project.id)
  }

  navigate() {
    window.location.href=this.props.project.url
  }

  render() {
    const { id, name, github, img } = this.props.project
    return (
      <div 
        className='project fadeIn' 
        onClick={ ()=>this.navigate() }
        onMouseOver={ () => this.handleHover() }>
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
  laptopDisplay: state.projectsReducer.projectInfo
})

const mapDispatchToProps = dispatch => ({
  setlaptopDisplay: id => dispatch(setlaptopDisplay(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)