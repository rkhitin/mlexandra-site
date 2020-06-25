import React, { useState } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import FullScreenMenu from 'src/components/NavBar/FullScreenMenu'
import Links from 'src/components/NavBar/Links'
import Link from 'src/components/NavBar/Link'

import { desktopLinksGroups } from './data'

import styles from './styles.module.css'

const NavBar = () => {
  const [isLinksHovered, setIsLinksHovered] = useState(false)
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false)

  const onHamburgerClick = () => setIsFullScreenMenuOpen(!isFullScreenMenuOpen)
  const onMouseOver = () => setIsLinksHovered(true)
  const onMouseOut = () => setIsLinksHovered(false)

  return (
    <>
      <nav
        className={classNames(styles.root, {
          [styles.fullScreenOpen]: isFullScreenMenuOpen,
        })}
      >
        <Link
          isLinksHovered={isLinksHovered}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          url="/"
        >
          <div className={styles.dot} />
        </Link>

        <div className={styles.linksGroups}>
          <div
            className={classNames(styles.desktopTopMenu, styles.linksWrapper)}
          >
            {desktopLinksGroups.map((linkGroup, index) => (
              <Links
                key={index}
                linkGroup={linkGroup}
                isLinksHovered={isLinksHovered}
                onMouseOut={onMouseOut}
                onMouseOver={onMouseOver}
              />
            ))}
          </div>
        </div>

        <div onClick={onHamburgerClick} className={styles.hamburgerWrapper}>
          <div
            className={classNames(styles.hamburger, {
              [styles.hamburgerActive]: isFullScreenMenuOpen,
            })}
          />
        </div>
      </nav>

      {isFullScreenMenuOpen && <div className={styles.menuPlaceholder} />}

      <CSSTransition
        in={isFullScreenMenuOpen}
        timeout={300}
        classNames={{
          enter: styles.alertEnter,
          enterActive: styles.alertEnterActive,
          exit: styles.alertExit,
          exitActive: styles.alertExitActive,
        }}
        unmountOnExit
      >
        <FullScreenMenu />
      </CSSTransition>
    </>
  )
}

export default NavBar
