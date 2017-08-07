import merge from 'lodash/merge'

const skillsReducer = (state = {skills: SKILLS}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'SET_SKILLS' :
      let newState = merge({}, state)
      newState.skills = action.skills
      return newState
    default :
      return state
  }
}

export default skillsReducer

const SKILLS = [
  'JavaScript',
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
  'MongoDB'
]
