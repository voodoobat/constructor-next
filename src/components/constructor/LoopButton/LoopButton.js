import scss from './LoopButton.module.scss'

import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'

export default function LoopButton ({ className, id }) {
  return (
    <div className={classNames(className, scss._)}>
      <Loop id={id} />
    </div>
  )
}
