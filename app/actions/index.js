export const setlaptopDisplay = project => {
  return ({
    type: 'SET_DISPLAY',
    project
  })
}

export const setProjects = projects => {
  return ({
    type: 'SET_PROJECTS',
    projects
  })
}
