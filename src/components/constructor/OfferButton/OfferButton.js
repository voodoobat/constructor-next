import scss from './OfferButton.module.scss'

import classNames from 'classnames'

import { useState } from 'react'
import ReactModal from 'react-modal'

import Button from '@components/common/Button/Button'

export default function OfferButton ({ className }) {
  const [isOpen, setOpen] = useState(false)

  // setInterval(() => setOpen(!isOpen), 1000)

  return (
    <div className={classNames(className, scss._)}>
      <Button color="black"
              onClick={() => setOpen(true)}>
        Предложить свой элемент
      </Button>
      <ReactModal isOpen={isOpen}>
        <button type="button" onClick={() => setOpen(false)}>
          Закрыть
        </button>
        <h1>Hello</h1>
      </ReactModal>
    </div>
  )
}
