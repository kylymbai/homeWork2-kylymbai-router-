import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <ul className={styles.links}>
        <li className={styles.li}>
            <NavLink to='/' className={styles.link}>MainPage</NavLink>
        </li>
        <li className={styles.li}>
            <NavLink to='/photos' className={styles.link}>PhotosPage</NavLink>
        </li>
    </ul>
  )
}
