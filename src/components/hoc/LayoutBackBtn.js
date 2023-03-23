import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


export default function LayoutBackBtn() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
  return (
    <>
        <button onClick={goBack}>back</button>
        <Outlet/>
    
    </>
  )
}
