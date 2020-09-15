import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import FullScreenMenu from 'src/components/NavBar/FullScreenMenu'
import Link from 'src/components/NavBar/Link'

import styles from './styles.module.css'

const NavBar = () => {
  const [isLinksHovered, setIsLinksHovered] = useState(false)
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false)

  const onHamburgerClick = () => setIsFullScreenMenuOpen(!isFullScreenMenuOpen)
  const onMouseOver = () => setIsLinksHovered(true)
  const onMouseOut = () => setIsLinksHovered(false)

  useEffect(() => {
    const bodyClassList = document.querySelector('body').classList

    if (isFullScreenMenuOpen) {
      window.scrollTo(0, 0)
      bodyClassList.add('modal-is-open')
    } else {
      bodyClassList.remove('modal-is-open')
    }
  }, [isFullScreenMenuOpen])

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
            <ul className={styles.links}>
              <li>
                <Link
                  url="/"
                  id="projects"
                  isLinksHovered={isLinksHovered}
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                >
                  recent projects
                </Link>
              </li>
              <li>
                <Link
                  url="/"
                  id="getin"
                  isLinksHovered={isLinksHovered}
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                >
                  get in touch
                </Link>
              </li>
            </ul>

            <ul className={styles.links}>
              <li>
                <Link
                  url="/page1"
                  id="about"
                  isLinksHovered={isLinksHovered}
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                >
                  about
                </Link>
              </li>
            </ul>
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
