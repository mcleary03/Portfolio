import fire from '../src/fire'

const projectsReducer = (state = {
                          projects: PROJECTS,
                          displayedProjects: [], 
                          laptopDisplay: INTRO
                        }, action) => {
  Object.freeze(state)
  let newState = { ...state }
  
  switch(action.type) {
    case 'SHOW_PROJECT' :
      newState.displayedProjects = [ ...state.displayedProjects ]
      newState.displayedProjects.push(PROJECTS[action.id])
      return newState
    case 'HIDE_PROJECTS' :
      newState.displayedProjects = []
      return newState
    case 'SET_LAPTOP_DISPLAY' :
      newState.laptopDisplay = PROJECTS[action.id]
      return newState
    default :
      return state
  }
}

export default projectsReducer

const INTRO = {
  name: 'Intro',
  description: [
    "Hi, I'm a full stack web developer.",
    "Here's a few recent projects.",
    "Dotty is a game built with D3, JavaScript and SCSS",
    "This laptop display is made of pure CSS",
    "Here are some animated, themed buttons made with JavaScript controlled styling (no stylesheet).",
    "and there is a REPL UI for writing ESQuery to parse the JavaScript AST (Abstract Syntax Tree)",
    "I'm rebuilding this page now, check back in a couple days for lots more."
  ]
}

const PROJECTS = [
  {
    id: 0,
    name: 'Portfolio',
    github: 'https://github.com/mcleary03/Portfolio',
    url: 'https://mcleary03.github.io/Portfolio/',
    img: '../images/headshot_med.jpg',
    technologies: ['JavaScript', 'React', 'Redux', 'SASS'],
    description: [
      'This page was built with React, Redux, SASS, and a whole lotta JavaScript.',
      'Click this terminal to close the laptop.'
    ]
  },
  {
    id: 1,
    name: ".e('dotty')",
    github: 'https://github.com/mcleary03/dotty',
    url: 'https://mcleary03.github.io/dotty/',
    img: 'https://cdn.glitch.com/e66d812d-475c-4f51-a0ac-6dc63a7d203b%2Fdotty-screenshot.png?1534718068630',
    technologies: ['JavaScript', 'D3.js', 'SVG', 'CSS'],
    description: [
      'A casual game, built with D3.js, that rewards a fast reflex with a high score.',
      'Tap PLAY to start, you have 1 second to tap each dot. Scores are based on reflex speed and are saved locally.',
      "Try CASUAL or NORMAL modes, which end after 10 dots or ENDURANCE, which doesn't end, for a higher score."
    ]
  },
  {
    id: 2,
    name: 'ESQuery REPL',
    github: 'https://github.com/mcleary03/esqueryREPL',
    url: 'https://mcleary03.github.io/esqueryREPL/',
    img: 'https://cdn.glitch.com/e66d812d-475c-4f51-a0ac-6dc63a7d203b%2Fesqueryrepl-screenshot.png?1534718071206',
    technologies: ['JavaScript', 'CSS'],
    description: [
      'Improved UI/UX of an open source tool that querys against the JavaScript AST (abstract syntax tree).',
      'Added multi-line queries, responsive grid layout, copy button that formats queries for external use, dark theme with color coded sections.'
    ]
  },
  {
    id: 3,
    name: 'Animated UI Components',
    github: 'https://github.com/mcleary03/Custom-React-Buttons',
    url: 'https://mcleary03.github.io/Nameless/?selectedKind=Btn&selectedStory=All%20color%20schemes&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
    img: 'https://cdn.glitch.com/e66d812d-475c-4f51-a0ac-6dc63a7d203b%2Fbtns-screenshot.png?1534718063312',
    technologies: ['JavaScript', 'React'],
    description: [
      'These button components have dynamic styling done entirely in JavaScript.',
      'State is used to control each step of the animation.',
      'Props like `caps` or  `bold` will affect the text.',
      'A `color` prop will set the theme of the button and any attribute may be overridden by passing a style object.'
    ]
  }
]
