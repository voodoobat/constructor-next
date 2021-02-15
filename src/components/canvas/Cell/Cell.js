import scss from './Cell.module.scss'

import { useState } from 'react'
import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'

export default function Cell ({ className, children }) {
  const [loop, setLoop] = useState(children)
  return (
    <div className={classNames(className, scss._)}
         onClick={() => setLoop(
           <Loop icon={`17.svg`} />
         )}>
      {loop}
    </div>
  )
}
