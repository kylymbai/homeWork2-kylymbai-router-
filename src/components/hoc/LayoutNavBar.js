import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../navBar/NavBar'

export default function LayoutNavBar() {
  return (
    <>
        <NavBar/>
        <Outlet/>
    
    </>
  )
}
