import { useState } from 'react'

import Main from './components/Main'
import Sidenav from './components/Sidenav'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Email from './components/Email'

function App() {
  

  return (
    <div>
      <Sidenav/>
      <Main/>
      <Timeline/>
      <Projects/>
      <Email/>
    </div>
  )
}

export default App
