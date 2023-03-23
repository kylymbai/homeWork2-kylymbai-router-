import React from 'react'
import { Link } from 'react-router-dom'

export default function Photo({photo}) {
  return (
    <li style={{listStyleType: 'none'}}>
        <p>photo name: </p>
        <Link to={`/photos/${photo.id}`} style={{textDecoration: 'none'}}>
            {photo.title}
        </Link>
        <p>---------------------------------------</p>

    </li>
  )
}
