import scss from './Cursor.module.scss'

import { useState } from 'react'
import classNames from 'classnames'

export default function Cursor ({ className }) {
  const [style, setStyle] = useState({
    top: 0,
    left: 0
  })

  // if (typeof window == 'object') {
  //   document.addEventListener('mousemove', ({ offsetX, offsetY }) => {
  //     setStyle({
  //       top: offsetY,
  //       left: offsetX 
  //     })
  //   })
  // }

  return (
    <div className={classNames(className, scss._)} style={style}>
    </div>
  )
}
