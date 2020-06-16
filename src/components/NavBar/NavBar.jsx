import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import styles from './NavBar.module.css'

const leftLinksGroup = [
  {
    content: <div className={styles.dot} />,
    url: '/',
    id: 'home',
  },
  {
    content: 'recent projects',
    url: '/',
    id: 'projects',
  },
  {
    content: 'get in touch',
    url: '/',
    id: 'getin',
  },
]

const rightLinksGroup = [
  {
    content: 'about',
    url: '/page1',
    id: 'about',
  },
]

const linksGroups = [leftLinksGroup, rightLinksGroup]

const NavBar = () => {
  const [isLinksHovered, setIsLinksHovered] = useState(false)

  const onMouseOver = () => setIsLinksHovered(true)
  const onMouseOut = () => setIsLinksHovered(false)

  return (
    <nav className={styles.root}>
      {linksGroups.map((linkGroup) => (
        <ul className={styles.list}>
          {linkGroup.map(({ content, url, id }) => (
            <li key={id}>
              <NavLink
                to={url}
                className={classNames(styles.link, {
                  [styles.linksHovered]: isLinksHovered,
                })}
                activeClassName={classNames({
                  [styles.activeLink]: id === 'about',
                })}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
              >
                {content}
              </NavLink>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  )
}

export default NavBar
