import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

const NoiseBackground = ({ isDark }) => (
  <div className={classNames(styles.root, { [styles.dark]: isDark })} />
)

export default NoiseBackground
