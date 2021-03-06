const skillsReducer = (state = {skills: SKILLS}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'SET_SKILLS' :
      let newState = {...state}
      newState.skills = action.skills
      return newState
    default :
      return state
  }
}

export default skillsReducer

const SKILLS = [
  'JavaScript',
  'jQuery',
  'ESQuery',
  'React',
  'Redux',
  'Node',
  'Express',
  'Passport',
  'A-Frame',
  'Ruby',
  'Rails',
  'HTML',
  'CSS',
  'Bootstrap',
  'SQL',
  'MongoDB',
  'Babel',
  'CSS3',
  'Semantic',
  'API',
  'OOP',
  'Functional'
]
