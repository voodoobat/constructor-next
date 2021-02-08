import scss from './Button.module.scss'

import classNames from 'classnames'

export default function Button ({
  className = '',
  tagName = 'button',
  type = 'button',
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

  return (
    <Tag className={buttonClasses}
         type={type}>
      {children}
    </Tag>
  )
}
