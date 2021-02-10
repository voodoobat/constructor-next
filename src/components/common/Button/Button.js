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
  const classes = classNames(
    className,
    scss._,
    color ? scss[`color_${color}`] : scss.color_default,
    size ? scss[`size_${size}`] : scss.size_default
  )

  return href ? (
    <Link href={href}>
      <a className={classes}>
        {children}
      </a>
    </Link>
  ) : (
    <Tag className={classes}
         type={type}>
      {children}
    </Tag>
  )
}
