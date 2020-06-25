import React from 'react'
import Link from 'src/components/NavBar/Link'

import styles from './styles.module.css'

const Links = ({
  linkGroup,
  isLinksHovered = false,
  onMouseOut,
  onMouseOver,
}) => (
  <ul className={styles.root}>
    {linkGroup.map(({ content, url, id }) => (
      <li key={id}>
        <Link
          url={url}
          id={id}
          isLinksHovered={isLinksHovered}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          {content}
        </Link>
      </li>
    ))}
  </ul>
)

export default Links
