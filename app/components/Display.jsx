import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from './ProjectList'

class Display extends Component {
  constructor() {
    super()
    // THIS STATE SHOULD NOT NEED TO BE SET HERE!!!!
    this.state = {
      display: 'projects'
    }
  }

  render() {
    return (
      <div id="display" className="container">
        <ProjectList projects={eval(this.state.display.toUpperCase())} />
      </div>
    )
  }
}

// THIS IS WRONG!!!!!!
const mapStateToProps = (state) => ({
  display: state.display
});
// NEED TO FIX THIS!!!!
export default connect(mapStateToProps)(Display);

const PROJECTS = [
  {
    name: 'React',
    img: 'https://facebook.github.io/react/img/logo.svg'
  },
  {
    name: 'Ruby on Rails',
    img: 'https://i1.wp.com/blog.kloud51.com/wp-content/uploads/2015/06/ruby-on-rails.jpg?resize=480%2C480&ssl=1'
  },
  {
    name: 'JavaScript',
    img: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png'
  },
  {
    name: 'sdfghsdf',
    img: 'https://i1.wp.com/blog.kloud51.com/wp-content/uploads/2015/06/ruby-on-rails.jpg?resize=480%2C480&ssl=1'
  },
  {
    name: 'asdf',
    img: 'https://facebook.github.io/react/img/logo.svg'
  },
  {
    name: 'asdfasd',
    img: 'https://i1.wp.com/blog.kloud51.com/wp-content/uploads/2015/06/ruby-on-rails.jpg?resize=480%2C480&ssl=1'
  },
]
