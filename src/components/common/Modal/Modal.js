import scss from './Modal.module.scss'

import classNames from 'classnames'

import Overlay from '@components/common/Overlay/Overlay'

export default function Modal ({className, isOpen, setOpen, children }) {
  const close = () => setOpen(false)

  return (
    <div className={classNames(className, scss._, isOpen ? scss.is_open : '')}>
      <div className={scss.window}>
        <button className={scss.close}
                onClick={close}
                type="button">Закрыть</button>

        {children}
      </div>
      <Overlay onClick={close} />
    </div>
  )
}