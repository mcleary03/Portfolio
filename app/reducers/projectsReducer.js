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
    name: 'Portfolio',
    github: 'https://github.com/mcleary03/Portfolio',
    img: 'https://facebook.github.io/react/img/logo.svg',
    description: 'The app you are seeing right now is built with React using Redux, A-Frame VR, Bootstrap, and ES6 JavaScript.  Try clicking on the A-Frame button above to see my integration of React with A-Frame (everything in the scene is a React component).  I have Redux keeping track of the state of my app and currently, styling is done with Bootstrap.'
  },
  {
    name: 'Hype or Type',
    github: 'https://github.com/between-the-lines/client',
    img: './app/images/hypeOrType.png',
    description: 'This was my first team project and first attempt at a hackathon.  Using IBM Watson Sentiment Analysis and a few other APIs, we display the general feeling about a topic using real-time Twitter data.  Emojis represent location and sentiment about the topic in a tweet or cluster of tweets depending on zoom level.  I was involved in planning, API integration, front-end development and design.'
  },
  {
    name: 'YelpCamp',
    github: 'https://github.com/mcleary03/YelpCamp',
    live: 'https://immense-thicket-93896.herokuapp.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png',
    description: 'Campground information and review app.  Written in HTML and JavaScript with Express for RESTful routing, MongoDB for the database and Passport for authentication.  Users can sign up, log in, add campgrounds or comment on others.  Users can then edit and delete campgrounds and comments that belong to them.'
  },
  {
    name: 'sdfghsdf',
    github: 'https://github.com/mcleary03/Portfolio',
    img: 'https://i1.wp.com/blog.kloud51.com/wp-content/uploads/2015/06/ruby-on-rails.jpg?resize=480%2C480&ssl=1'
  },
  {
    name: 'asdf',
    github: 'https://github.com/mcleary03/Portfolio',
    img: 'https://facebook.github.io/react/img/logo.svg'
  },
  {
    name: 'asdfasd',
    github: 'https://github.com/mcleary03/Portfolio',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png'
  },
]
