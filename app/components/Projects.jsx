import React, { Component } from 'react'
import { connect } from 'react-redux'
import { projectsReducer } from '../reducers'
import { setProjects } from '../actions'
import Card from './Card'
import 'material-design-icons'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listIndex: 0,
    }

  }

  changeProject(dir) {
    let max = this.props.projects.length
    let i = this.state.listIndex

    if (dir === 'next') i = (i + 1) % max
    if (dir === 'prev') i = i > 0 ? i - 1 : max - 1

    this.setState({ listIndex: i })
  }

  renderList() {
    return (
      this.props.projects.map( project =>
        <Card key={project.name} project={project} />
      )
    )
  }

  render() {
    return (
      <div className='projectsView grid'>

        <div
          className='navArrow'
          onClick={ () => this.changeProject('prev') }
        >
          <i className="material-icons link">arrow_back</i>
        </div>

        <div>
          <h1>Recent Projects</h1>
          { this.renderList()[this.state.listIndex] }
        </div>

        <div
          className='navArrow'
          onClick={ () => this.changeProject('next') }
        >
          <i className="material-icons link">arrow_forward</i>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projectsReducer.projects
})

const mapDispatchToProps = dispatch => ({
  setProjects: projects => dispatch(setProjects(projects))
})


export default connect(mapStateToProps, mapDispatchToProps)(Projects)
