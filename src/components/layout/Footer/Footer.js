import scss from './Footer.module.scss'

import Link from 'next/link'
import { ReactSVG } from 'react-svg'

import Container from '@components/layout/Container/Container'

export default function Footer () {
  return (
    <footer className={scss.footer}>
      <Container className={scss.container}>
        <Link href="https://вязаный.рф">
          <a className={scss.logo} target="_blank">
            <ReactSVG src="/svg/logo-brand.svg" />
          </a>
        </Link>
        <nav className={scss.nav}>
          <span className={scss.nav_item}>
            <Link href="#">
              <a>Вязаный.рф интернет-магазин пряжи</a>
            </Link>
          </span>
          <span className={scss.nav_item}>
            <Link href="#">
              <a>Мастер-классы</a>
            </Link>
          </span>
          <span className={scss.nav_item}>
            <Link href="#">
              <a>Доставка по России от 1 мотка</a>
            </Link>
          </span>
          <span className={scss.nav_item}>
            <Link href="#">
              <a>Конкурс</a>
            </Link>
          </span>
          <span className={scss.nav_item}>
            <Link href="#">
              <a>Каталог</a>
            </Link>
          </span>
          <span className={scss.nav_item}>
            <Link href="#">
              <a>Скидки</a>
            </Link>
          </span>
        </nav>
        <nav className={scss.sm}>
          <div className={scss.sm_caption}>
            Вязаный в соцсетях
          </div>
          <div className={scss.sm_list}>
            <Link href="https://www.instagram.com/vazanyi.rf/">
              <a target="_blank">
                <ReactSVG src="/svg/sm/in.svg" />
              </a>
            </Link>
            <Link href="https://vk.com/vazanyirf">
              <a target="_blank">
                <ReactSVG src="/svg/sm/vk.svg" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCIRRlU4uaSHAnVTKFslBFhQ">
              <a target="_blank">
                <ReactSVG src="/svg/sm/yt.svg" />
              </a>
            </Link>
          </div> 
        </nav>
      </Container>
    </footer>
  )
}
