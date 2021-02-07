import scss from './Footer.module.scss'

import Link from 'next/link'
import { ReactSVG } from 'react-svg'

export default function Footer () {
  return (
    <footer className={scss.footer}>
      <Link href="https://вязаный.рф">
        <a className={scss.logo} target="_blank">
          <ReactSVG src="svg/logo-brand.svg" />
        </a>
      </Link>
    </footer>
  )
}
