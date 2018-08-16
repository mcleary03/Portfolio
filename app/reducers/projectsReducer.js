const projectsReducer = (state = {displayedProjects:[], projectInfo: PROJECTS[0]}, action) => {
  Object.freeze(state)
  let newState = { ...state }
  
  switch(action.type) {
    case 'SHOW_PROJECT' :
      newState.displayedProjects.push(id)
      return newState
    case 'PROJECT_INFO' :
      newState.projectInfo = PROJECTS[id]
      return newState
    default :
      return state
  }
}

export default projectsReducer

const PROJECTS = [
  {
    name: 'Portfolio',
    github: 'https://github.com/mcleary03/Portfolio',
    url: 'https://mcleary03.github.io/Portfolio/',
    technologies: ['JavaScript', 'React', 'Redux', 'SASS'],
    description: 'This page was built with React, Redux, SASS, and a whole lotta JavaScript. Click this terminal to close the laptop.'
  },
  {
    name: ".e('dotty')",
    github: 'https://github.com/mcleary03/dotty',
    url: 'https://mcleary03.github.io/dotty/',
    technologies: ['JavaScript', 'D3.js', 'SVG', 'CSS'],
    description: "A casual game, built with D3.js, that rewards a fast reflex with a high score. Tap PLAY to start. You have 1 second to tap each dot. Scores are based on reflex speed and are saved locally. Try CASUAL or NORMAL modes, which end after 10 dots or ENDURANCE, which doesn't end, for a higher score."
  },
  {
    name: 'Animated UI Components',
    github: 'https://github.com/mcleary03/Custom-React-Buttons',
    url: 'https://mcleary03.github.io/Nameless/?selectedKind=Btn&selectedStory=All%20color%20schemes&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
    technologies: ['JavaScript', 'React'],
    description: 'These button components have dynamic styling done entirely in JavaScript. State is used to control each step of the animation. Props like `caps` or  `bold` will affect the text. A `color` prop will set the theme of the button and any attribute may be overridden by passing a style object.'
  },
  {
    name: 'ESQuery REPL',
    github: 'https://github.com/mcleary03/esqueryREPL',
    url: 'https://mcleary03.github.io/esqueryREPL/',
    technologies: ['JavaScript', 'CSS'],
    description: 'Improved UI and UX of an existing open source tool that querys against the JavaScript AST (abstract syntax tree). Added ability to write multi line queries, responsive grid layout, a copy button that formats multi-line queries into valid syntax for external use and adds it to the clipboard, and a dark theme with color coded sections.'
  }
]
