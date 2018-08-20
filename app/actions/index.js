const SET_LAPTOP_DISPLAY = 'SET_LAPTOP_DISPLAY'
const SHOW_PROJECT = 'SHOW_PROJECT'


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
