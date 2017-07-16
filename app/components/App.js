import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import ProjectList from './ProjectList'

class App extends Component {
  constructor() {
    super()
  }
  render () {
    return (
      <div>
        <Header />
        <ProjectList projects={this.props.projects} />
      </div>
    )
  }
}

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
    name: 'sdfsthdfj',
    img: 'https://facebook.github.io/react/img/logo.svg'
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

// Makes sure page is loaded before rendering anything
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app")
  ReactDOM.render(<App projects={PROJECTS} />, app)
})
