import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from './Home'
import FormPage from './FormPage'
import DataPage from './DataPage'

const App = () => {
  return (
    <>
      
        <Routes>
          <Route path='/' element= {<Home/>}></Route>
          <Route path='/form' element={<FormPage/>}></Route>
          <Route path='/data' element = {<DataPage/>}></Route>
        </Routes>
      
    </>
  )
}

export default App