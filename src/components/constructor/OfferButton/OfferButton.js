import scss from './OfferButton.module.scss'

import classNames from 'classnames'

import { useState } from 'react'

import Modal from '@components/common/Modal/Modal'
import ElementForm from '@components/form/ElementForm/ElementForm'
import Button from '@components/common/Button/Button'

export default function OfferButton ({ className }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={classNames(className, scss._)}>
      <Button color="black"
              onClick={() => setOpen(true)}>
        Предложить свой элемент
      </Button>
      <Modal isOpen={isOpen}
             setOpen={setOpen}>
        <ElementForm />
      </Modal>
    </div>
  )
}
