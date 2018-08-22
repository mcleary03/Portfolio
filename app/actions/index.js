const SET_LAPTOP_DISPLAY = 'SET_LAPTOP_DISPLAY'
const SHOW_PROJECT = 'SHOW_PROJECT'
const HIDE_PROJECTS = 'HIDE_PROJECTS'


export const setlaptopDisplay = projectID => {
  return ({
    type: SET_LAPTOP_DISPLAY,
    id: projectID
  })
}

export const showProject = projectID => {
  return ({
    type: SHOW_PROJECT,
    id: projectID
  })
}

export const hideProjects = projectID => {
  return ({
    type: HIDE_PROJECTS
  })
}
