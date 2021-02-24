import scss from './Header.module.scss'

import Link from 'next/link'
import { ReactSVG } from 'react-svg'

import Container from '@src/components/layout/Container/Container'

export default function Header () {
  return (
    <header className={scss._}>
      <Container className={scss.container}>
        <Link href="/">
          <a className={scss.logo}>
            <ReactSVG className={scss.logo_svg} src="/svg/logo.svg" />
            {/* <span className={scss.logo_note}>
              Конструктор схем
            </span> */}
          </a>
        </Link>
        <nav className={scss.nav}>
          <Link href="#">
            <a className={scss.nav_link}>
              <span>Мастер-классы</span>
            </a>
          </Link>
          <Link href="/schemes">
            <a className={scss.nav_link}>
              <ReactSVG src="/svg/user-icon.svg" />
              <span>Мои схемы</span>
            </a>
          </Link>
        </nav>
      </Container>
    </header>
  )
}
