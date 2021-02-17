import scss from './GroupCommit.module.scss'

import classNames from 'classnames'

import Button from '@components/common/Button/Button'

export default function GroupCommit ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      <div className={scss.buttons}>
        <Button color="red">
          Отмена 
        </Button>
        <Button color="blue">
          Добавить 
        </Button>
      </div>
    </div>
  )
}
