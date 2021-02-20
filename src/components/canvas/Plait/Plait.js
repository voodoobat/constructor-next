import scss from './Plait.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Row from '@components/canvas/Row/Row'
import Cell from '@components/canvas/Cell/Cell'

import * as store from '@src/functions'

function Plait ({ className, plait, dispatch }) {
  const setActive = () => dispatch(store.setActiveGroup(plait))

  return (
    <div className={classNames(className, scss._, plait.active ? scss.is_active : '')}
         onClick={setActive}>
      {plait.canvas.map((element, y) => (
        <Row key={y}>
          {element.map((cell, x) => (
            <Cell cell={cell} key={x} />
          ))}
        </Row>
      ))}
    </div>
  )
}

export default connect(store => ({ ...store }))(Plait)
