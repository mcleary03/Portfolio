export const changeDisplay = (display) => {
  return ({
    type: 'CHANGE_DISPLAY',
    display
  })
}

export const setProjects = (projects) => {
  return ({
    type: 'SET_PROJECT_LIST',
    projects: projects
  })
}
