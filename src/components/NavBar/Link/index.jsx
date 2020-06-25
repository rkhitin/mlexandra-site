import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import styles from './styles.module.css'

const Link = ({
  url,
  isLinksHovered,
  id,
  onMouseOver,
  onMouseOut,
  children,
}) => (
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
    {children}
  </NavLink>
)

export default Link
