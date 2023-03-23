import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import PhotosPage from './pages/photosPage/PhotosPage'
import LayoutNavBar from './components/hoc/LayoutNavBar'
import LayoutBackBtn from './components/hoc/LayoutBackBtn'
import PhotoMoreInfo from './components/PhotoMoreInfo'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutNavBar/>}>
          <Route index element={<MainPage/>}/>
        </Route>

       <Route path='' element={<LayoutBackBtn/>}>
          <Route path='/photos' element={<PhotosPage/>}/>
          <Route path='/photos/:id' element={<PhotoMoreInfo/>}/>
       </Route>

       

        <Route path='*' element={<h3>404 not found...</h3>}/>
      </Routes>
    </BrowserRouter>
  )
}
