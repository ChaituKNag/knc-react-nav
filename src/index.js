import React from 'react'
import styles from './styles.module.css'

export const NavBar = ({ links }) => {
  return <nav className={styles.nav}>
    <ul className={styles.navList}>
      {links.map(link => <li><a href={link.url}>{link.label}</a></li>)}
    </ul>
  </nav>
}
