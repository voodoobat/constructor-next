import scss from './Modal.module.scss'

import classNames from 'classnames'

import Overlay from '@components/common/Overlay/Overlay'

export const ButtonClose = ({ className, onClick }) => {
  return (
    <button className={classNames(className, scss.close)}
            onClick={onClick}
            type="button">Закрыть</button>
  )
}

export default function Modal ({className, isOpen, setOpen, children }) {
  const close = () => setOpen(false)

  return (
    <div className={classNames(className, scss._, isOpen ? scss.is_open : '')}>
      <div className={scss.window}>
        <ButtonClose />
        {children}
      </div>
      <Overlay onClick={close}
               isDark={true} />
    </div>
  )
}
