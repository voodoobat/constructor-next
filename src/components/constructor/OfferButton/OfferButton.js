import scss from './OfferButton.module.scss'

import classNames from 'classnames'

import { useState } from 'react'
import { Modal } from 'react-bootstrap'

import ElementForm from '@components/form/ElementForm/ElementForm'
import { ButtonClose } from '@components/common/Modal/Modal'
import Button from '@components/common/Button/Button'

export default function OfferButton ({ className }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={classNames(className, scss._)}>
      <Button color="black"
              onClick={() => setOpen(true)}>
        Предложить свой элемент
      </Button>
      <Modal show={isOpen} onHide={() => setOpen(false)}>
        <ButtonClose onClick={() => setOpen(false)} />
        <Modal.Dialog>
          <ElementForm />
        </Modal.Dialog>
      </Modal>
    </div>
  )
}
