import scss from './Footer.module.scss'

import Link from 'next/link'
import { ReactSVG } from 'react-svg'

import Container from '@components/layout/Container/Container'

export default function Footer () {
  return (
    <footer className={scss.footer}>
      <Container>
        <Link href="https://вязаный.рф">
          <a className={scss.logo} target="_blank">
            <ReactSVG src="svg/logo-brand.svg" />
          </a>
        </Link>
      </Container>
    </footer>
  )
}
