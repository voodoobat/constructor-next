import scss from './Group.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Row from '@components/canvas/Row/Row'
import Cell from '@components/canvas/Cell/Cell'

import * as store from '@store/functions'

import Delete from './svg/delete.svg'

function Group ({ className, group, controls = true, dispatch }) {
  const setActive = () => dispatch(store.setActiveGroup(group))
  const remove = () => dispatch(store.removeGroup(group))

  return (
    <div className={classNames(className, scss._, group.active ? scss.is_active : '')}>
      {controls &&
        <button className={scss.delete}
                onClick={remove}
                type="button">
          <Delete />
        </button>
      }
      <div className={classNames(controls ? scss.canvas : '')}
           onClick={setActive}>
        {group.canvas.map((element, y) => (
          <Row key={y}>
            {element.map((cell, x) => (
              <Cell cell={cell} key={x} />
            ))}
          </Row>
        ))}
      </div>
    </div>
  )
}

export default connect(store => ({ ...store }))(Group)
