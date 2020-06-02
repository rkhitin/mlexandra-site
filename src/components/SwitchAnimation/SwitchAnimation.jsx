import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import styles from 'src/components/SwitchAnimation/SwitchAnimation.module.css'

// Should be same as --enter-animation-timeout in styles
const ENTER_ANIMATION_TIMEOUT = 500
// Should be same as sum of --exit-animation-timeout
// and --exit-animation-delay in styles
const EXIT_ANIMATION_TIMEOUT = 400

const SwitchAnimation = () => {
  const [isAnimationStart, setIsAnimationStart] = useState(false)
  const { pathname } = useLocation()

  // TODO: remove
  return null;

  useEffect(
    () => () => {
      setIsAnimationStart(true)

      setTimeout(() => {
        setIsAnimationStart(false)
      }, ENTER_ANIMATION_TIMEOUT)
    },
    [pathname]
  )

  return (
    <CSSTransition
      in={isAnimationStart}
      timeout={{
        enter: ENTER_ANIMATION_TIMEOUT,
        exit: EXIT_ANIMATION_TIMEOUT,
      }}
      classNames={styles}
    >
      <div className={styles.curtain} />
    </CSSTransition>
  )
}

export default SwitchAnimation
