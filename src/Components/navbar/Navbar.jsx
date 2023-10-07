import React from 'react'
import styles from './Navbar.module.css'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'


export const Navbar = ({data}) => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <div>
          <button>Home</button>
          <button>Attorney</button>
          <button>Practice Areas</button>
          <button>About Us</button>
        </div>
        <Button children="Contact Now"/>
    </nav>
  )
}
