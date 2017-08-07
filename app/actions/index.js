export const setDisplay = display => {
  return ({
    type: 'SET_DISPLAY',
    display: display
  })
}

export const setProjects = projects => {
  return ({
    type: 'SET_PROJECTS',
    projects: projects
  })
}

export const setSkills = skills => {
  return ({
    type: 'SET_SKILLS',
    skills: skills
  })
}

export const setPlanets = planets => {
  return ({
    type: 'SET_PLANETS',
    planets: planets
  })
}
