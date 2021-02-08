import scss from './Welcome.module.scss'

import { ReactSVG } from 'react-svg'
import classNames from 'classnames'

import Container from '@components/layout/Container/Container'
import Button from '@components/common/Button/Button'

export default function Welcome () {
  return (
    <div className={scss.welcome}>
      <Container className={scss.container}>
        <div className={scss.feature_box}>
          <div className={scss.feature}>
            <ReactSVG src="svg/welcome/feature_1.svg"
                      className={scss.feature_icon} />
            <span className={scss.feature_text}>
              Создавайте собственные схемы
            </span>
          </div>
          <div className={scss.feature}>
            <ReactSVG src="svg/welcome/feature_2.svg"
                      className={scss.feature_icon} />
            <span className={scss.feature_text}>
              Объединяйте элементы
            </span>
          </div>
          <div className={scss.feature}>
            <ReactSVG src="svg/welcome/feature_3.svg"
                      className={scss.feature_icon} />
            <span className={scss.feature_text}>
              Сохраняйте схемы в личном кабинете, <br/>
              чтобы вернуться к их редактированию
            </span>
          </div>
          <div className={classNames(scss.feature, scss.button_box)}>
            <Button className={scss.button}
                    href="/schemes">
              Создать схему
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
