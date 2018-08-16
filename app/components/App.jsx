import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showProject } from '../actions'
import { projectsReducer } from '../reducers'
import Header from './Header'
import Footer from './Footer'
import Display from './Display'
class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div id='App'>
        <Header />
        <Display />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  laptopDisplay: state.projectsReducer.projectInfo,
})

const mapDispatchToProps = dispatch => ({
  getInfo: id => dispatch(setProjects(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
