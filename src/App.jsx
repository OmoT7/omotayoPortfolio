import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Template from './template/Template'
import Homepage from './pages/Hompage'
import Projects from './pages/Projects'
import About from './pages/About'
import Work from './pages/Work'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Template/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        
      </Route>
    </Routes>
   
  )
}

export default App
