export const setDisplay = (display) => {
  return ({
    type: 'SET_DISPLAY',
    display: display
  })
}

export const setProjects = (projects) => {
  return ({
    type: 'SET_PROJECT_LIST',
    projects: projects
  })
}
