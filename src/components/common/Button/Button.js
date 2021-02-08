import scss from './Button.module.scss'

import Link from 'next/link'
import classNames from 'classnames'

export default function Button ({
  className = '',
  tagName = 'button',
  type,
  href,
  children,
  color,
  size
}) {

  const Tag = tagName
  const buttonClasses = classNames(
    className,
    scss.button,
    color ? scss[`color_${color}`] : '',
    size ? scss[`size_${size}`] : ''
  )

  return href ? (
    <Link href={href}>
      <a className={buttonClasses}>
        {children}
      </a>
    </Link>
  ) : (
    <Tag className={buttonClasses}
         type={type}>
      {children}
    </Tag>
  )
}
