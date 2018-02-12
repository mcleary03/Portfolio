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
    img: './app/images/portfolio.gif',
    technologies: ['JavaScript(ES6/2015)', 'React', 'Redux', 'SASS'],
    description: 'I have Redux keeping track of the state of my app and the styling is all custom.  The A-Frame button at the top links to my integration of React with A-Frame.'
  },
  {
    name: 'Hype or Type',
    github: 'https://github.com/between-the-lines/client',
    img: './app/images/hypeOrType.gif',
    technologies: ['JavaScript(ES6/2015)', 'Sentiment Analysis API', 'Twitter API', 'Google Maps', 'CSS'],
    description: 'This was my first team project and first attempt at a hackathon.  Using IBM Watson Sentiment Analysis and a few other APIs, we display the general feeling about a topic using real-time Twitter data.  Emojis represent location and sentiment about the topic in a tweet or cluster of tweets depending on zoom level.  I was involved in planning, API integration, front-end development and design.'
  },
  {
    name: 'YelpCamp',
    github: 'https://github.com/mcleary03/YelpCamp',
    live: 'https://immense-thicket-93896.herokuapp.com/',
    img: './app/images/yelpCamp.gif',
    technologies: ['JavaScript', 'MongoDB', 'Mongoose', 'Express', 'Bootstrap', 'Passport'],
    description: 'Campground information and review app.  Written in HTML and JavaScript with Express for RESTful routing, MongoDB for the database and Passport for authentication.  Users can sign up, log in, add campgrounds or comment on others.  Users can then edit and delete campgrounds and comments that belong to them.'
  }
]
