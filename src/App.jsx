import { useState } from 'react'
import Main from './components/Main'
import Sidenav from './components/Sidenav'
import Timeline from './components/Timeline'
import Projects from './components/Projects'

function App() {
  

  return (
    <div>
      <Sidenav/>
      <Main/>
      <Timeline/>
      <Projects/>
    </div>
  )
}

export default App
