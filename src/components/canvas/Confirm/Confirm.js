import scss from './Confirm.module.scss'

import classNames from 'classnames'

import Overlay from '@components/common/Overlay/Overlay'
import Button from '@components/common/Button/Button'

export default function Confirm ({ className, show, caption, accept, dismiss, children }) {
  return <>
    {show &&
      <div className={classNames(className, scss._)}>
        <div className={scss.content}>
          {caption &&
            <div className={scss.caption}>
              {caption}
            </div>
          }
          {children}
          <div className={scss.controls}>
            <Button className={scss.button}
                    onClick={dismiss}
                    color="red">
              Отмена
            </Button>
            <Button className={scss.button}
                    onClick={accept}
                    color="blue">
              Сохранить
            </Button>
          </div>
        </div>
        <Overlay onClick={dismiss} isDark={true} />
      </div>
    }
  </>
}
