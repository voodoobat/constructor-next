import scss from './Confirm.module.scss'

import Button from '@components/common/Button/Button'
import classNames from 'classnames'

export default function Confirm ({ className, cell, yes, no }) {

  console.log(`offset_${cell.x}`)

  return (
    <div className={classNames(className, scss._, scss[`offset_${cell.x}`])}>
      <Button color="red" onClick={no}>
        Отмена
      </Button>
      <Button color="blue" onClick={yes}>
        Сохранить
      </Button>
    </div>
  )
}
