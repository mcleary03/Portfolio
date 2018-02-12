export const setDisplay = display => {
  return ({
    type: 'SET_DISPLAY',
    display
  })
}

export const setProjects = projects => {
  return ({
    type: 'SET_PROJECTS',
    projects
  })
}

export const setSkills = skills => {
  return ({
    type: 'SET_SKILLS',
    skills
  })
}

export const setPlanets = planets => {
  return ({
    type: 'SET_PLANETS',
    planets
  })
}

export const setGeolocation = position => {
  return ({
    type: 'SET_GEOLOCATION',
    position
  })
}

export const unwatchGeolocation = () => {
  return ({
    type: 'UNWATCH_GEOLOCATION'
  })
}
