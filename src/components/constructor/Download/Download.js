import scss from './Download.module.scss'

import { useState } from 'react'
import classNames from 'classnames'

import Button from '@components/common/Button/Button'

export default function Download ({ className, children }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={classNames(className, scss._)}>
      <Button onClick={() => setOpen(true)}
              color="default" 
              size="large">
        Скачать схему
      </Button>
    </div>
  )
}
