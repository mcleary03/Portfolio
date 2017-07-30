import merge from 'lodash/merge'

const projectsReducer = (state = {projects: PROJECTS}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'SET_PROJECTS' :
      let newState = merge({}, state)
      newState.projects = action.projects
      return newState
    default :
      return state
  }
}

export default projectsReducer

const PROJECTS = [
  {
    name: 'React',
    img: 'https://facebook.github.io/react/img/logo.svg',
    description: 'The app you are seeing right now.  React app using Redux, A-Frame, Bootstrap, and ES6 JavaScript.'
  },
  {
    name: 'Ruby on Rails',
    img: 'https://i1.wp.com/blog.kloud51.com/wp-content/uploads/2015/06/ruby-on-rails.jpg?resize=480%2C480&ssl=1',
    description: 'Backend project using Ruby on Rails, PostgreSQL, and lots of Ruby gems.'
  },
  {
    name: 'JavaScript',
    img: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
    description: 'Vanilla JavaScript project with Express for RESTful routing, MongoDB for the database and Passport for authentication.'
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
