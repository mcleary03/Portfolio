import merge from 'lodash/merge'

const projectsReducer = (state, action) => {
  if (state == undefined) return ({projects: PROJECTS})
  Object.freeze(state)
  switch(action.type) {
    case 'SET_PROJECT_LIST' :
      let newState = merge({}, state)
      newState.projects = action.projects
      return newState
    default :
      return state
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


export default projectsReducer
