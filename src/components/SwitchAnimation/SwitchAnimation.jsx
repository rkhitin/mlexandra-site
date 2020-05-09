import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import styles from 'src/components/SwitchAnimation/SwitchAnimation.module.css'

// Should be same as --animation-timeout in styles
const ANIMATION_TIMEOUT = 300

const SwitchAnimation = () => {
  const [isAnimationStart, setIsAnimationStart] = useState(false)
  const { pathname } = useLocation()

  useEffect(
    () => () => {
      setIsAnimationStart(true)

      setTimeout(() => {
        setIsAnimationStart(false)
      }, ANIMATION_TIMEOUT)
    },
    [pathname]
  )

  return (
    <CSSTransition
      in={isAnimationStart}
      timeout={ANIMATION_TIMEOUT}
      classNames={styles}
    >
      <div className={styles.curtain} />
    </CSSTransition>
  )
}

export default SwitchAnimation
