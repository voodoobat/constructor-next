import scss from './Modal.module.scss'

import { useState } from 'react'
import classNames from 'classnames'

export default function Modal ({ className, children, open }) {
  const [isOpen, setOpen] = useState(Boolean(open))

  return (
    <div className={classNames(className, scss._)}>
      <div className={scss.modal}>
        {children}
      </div>
      <Overlay onClick={() => setOpen(false)} />
    </div>
  )
}
