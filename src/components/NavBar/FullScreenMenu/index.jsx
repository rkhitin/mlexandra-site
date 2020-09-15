import React from 'react'

import NoiseBackground from 'src/components/NoiseBackground'
import { NavLink } from 'react-router-dom'
import SocialLinks from 'src/components/SocialLinks'

import styles from './styles.module.css'

const FullScreenMenu = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <ul className={styles.links}>
        <li className={styles.firstMenuItem}>
          <NavLink className={styles.link} to="/">
            about
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/">
            recent projects
          </NavLink>
        </li>
      </ul>

      <div>
        <div className={styles.label}>get in touch</div>

        <a className={styles.email} href="mailto: m@lexandra.ru">
          m@lexandra.ru
        </a>

        <SocialLinks />
      </div>
    </div>

    <NoiseBackground isDark />
  </div>
)

export default FullScreenMenu
