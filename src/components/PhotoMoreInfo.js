import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function PhotoMoreInfo() {
    const [photo, setPhoto] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => response.json())
        .then(data => setPhoto(data))
    }, [id])
  return (
    <div>
        <img src={photo.url}/>
    
    </div>
  )
}
