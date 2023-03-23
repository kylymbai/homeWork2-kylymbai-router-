import React from 'react'
import Photo from '../../components/Photo'
import { useState, useEffect } from 'react'

export default function PhotosPage() {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setPhotos(data))
    }, [])
  return (
    <ul>
      {photos.slice(0, 15).map(photo => <Photo photo={photo}/> )}  
    </ul>
  )
}
