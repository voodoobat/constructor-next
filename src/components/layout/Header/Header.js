import scss from './Header.module.scss'

import Link from 'next/link'
import { ReactSVG } from 'react-svg'

export default function Header () {
  return (
    <header className={scss.header}>
      <Link href="/">
        <a className={scss.logo}>
          <ReactSVG className={scss.logo_svg} src="svg/logo.svg" />
          <span className={scss.logo_note}>
            Конструктор схем
          </span>
        </a>
      </Link>
      <nav className={scss.nav}>
        <Link href="#">
          <a>Мастер-классы</a>
        </Link>
        <Link href="#">
          <a>Мои схемы</a>
        </Link>
      </nav>
    </header>
  )
}
