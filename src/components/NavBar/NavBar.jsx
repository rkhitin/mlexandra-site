import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import styles from './NavBar.module.css'

const links = [
  {
    content: <div className={styles.dot} />,
    url: '/',
    id: 'home',
  },
  {
    content: 'about',
    url: '/page1',
    id: 'about',
  },
  {
    content: 'recent projects',
    url: '/page3',
    id: 'projects',
  },
  {
    content: 'get in touch',
    url: '/page2',
    id: 'getin',
  },
]

const NavBar = () => {
  const [isLinksHovered, setIsLinksHovered] = useState(false)

  const onMouseOver = () => setIsLinksHovered(true)
  const onMouseOut = () => setIsLinksHovered(false)

  return (
    <nav>
      <ul className={styles.list}>
        {links.map(({ content, url, id }) => (
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
    </nav>
  )
}

export default NavBar
