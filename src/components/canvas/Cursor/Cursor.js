import scss from './Cursor.module.scss'

import classNames from 'classnames'
import { connect } from 'react-redux'

import Move from '@components/constructor/Tool/svg/move.svg'

function Cursor ({ className, position }) {

  const { x, y } = position

  return (
    <div className={classNames(className, scss._)}
         style={{
           position: 'fixed',
           top: y,
           left: x,
           pointerEvents: 'none',
           zIndex: 10
         }}>
      <Move />      
    </div>
  )
}

export default connect(state => ({ ...state }))(Cursor)
