import React from 'react'

import { ReactComponent as BehanceIcon } from './icons/behance.svg'
import { ReactComponent as DribbbleIcon } from './icons/dribbble.svg'
import { ReactComponent as TelegramIcon } from './icons/telegram.svg'
import { ReactComponent as FacebookIcon } from './icons/facebook.svg'

import styles from './styles.module.css'

const links = [
  {
    id: 'behance',
    Icon: BehanceIcon,
    to: 'https://www.behance.net/mleksandra',
  },
  {
    id: 'dribbble',
    Icon: DribbbleIcon,
    to: 'https://dribbble.com/mlexandra',
  },
  {
    id: 'telegram',
    Icon: TelegramIcon,
    to: 'https://t.me/mlexandra',
  },
  {
    id: 'facebook',
    Icon: FacebookIcon,
    to: 'https://www.facebook.com/alexandra.monastyrshina',
  },
]

const SocialLinks = () => {
  return (
    <ul className={styles.root}>
      {links.map(({ id, Icon, to }) => (
        <li key={id}>
          <a href={to} target="_blank" rel="noopener noreferrer">
            <Icon className={styles.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
