import scss from './SchemeButton.module.scss'

import Link from 'next/link'
import classNames from 'classnames'

import Icon from '@svg/schemes/plus-icon.svg'

export default function Scheme ({ href, className }) {
  return (
    <Link href={href}>
      <a className={classNames(className, scss.button, scss.button_create)}>
        <Icon />
      </a>
    </Link>
  )
}
