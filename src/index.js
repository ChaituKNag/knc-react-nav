import React from 'react'
import styles from './styles.module.css'

export const NavBar = ({ links }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {links.map((link, i) => (
          <li key={`${link.label}-${i}`}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
