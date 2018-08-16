export const setlaptopDisplay = projectID => {
  return ({
    type: 'SET_DISPLAY',
    id: projectID
  })
}

export const showProject = projectID => {
  return ({
    type: 'SHOW_PROJECT',
    id: projectID
  })
}
