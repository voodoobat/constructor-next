import scss from './Download.module.scss'

import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import classNames from 'classnames'

import CloseButton from '@components/common/CloseButton/CloseButton'
import Button from '@components/common/Button/Button'

import DownloadIcon from './svg/download.svg'
import BackIcon from './svg/back.svg'

export default function Download ({ className, children }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={classNames(className, scss._)}>
      <Button onClick={() => setOpen(true)}
              color="default" 
              size="large">
        Скачать схему
      </Button>
      <Modal show={isOpen}
             onHide={() => setOpen(false)}
             id="download-modal">
        <CloseButton onClick={() => setOpen(false)} />
        <div className={scss.back_to_edit}
             onClick={() => setOpen(false)}>
          <BackIcon className={scss.back_icon} /> Вернуться к редактированию
        </div>
        <div className={scss.image}>
          <img src="/images/canvas_1.png" />
        </div>
        <div className={scss.submit}>
          <div className={scss.submit_note}>
            Войдите в <a href="">личный кабинет</a>, <br />
            чтобы получить возможность <br />
            редактировать схему в дальнейшем
          </div>
          <Button className={scss.submit_button}
                  color="blue"
                  size="default">
            <div className={scss.submit_button_text}>
              PNG 190 КБ <br />
              400 x 380 px 
            </div>
            <DownloadIcon className={scss.submit_button_icon} />
          </Button>
        </div>
      </Modal>
    </div>
  )
}
