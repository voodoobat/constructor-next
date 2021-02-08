import scss from './SchemeButton.module.scss'

import Link from 'next/link'
import classNames from 'classnames'

export default function Scheme ({ image, name, date, href, className }) {
  return (
    <Link href={href || ''}>
      <a className={classNames(className, scss.button, scss.button_show)}>
        <div className={scss.image}>
          <img src={image} alt={name} />
        </div>
        <div className={scss.text}>
          <span className={scss.name}>
            {name}
          </span>
          <span className={scss.date}>
            Изменено: {date}
          </span>
        </div>
      </a>
    </Link>
  )
}
