import scss from './Canvas.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'
import Cell from '@components/canvas/Cell/Cell'
import Row from '@components/canvas/Row/Row'

function Canvas ({ className, canvas, scale }) {
  return (
    <div className={classNames(className, scss._, scss[`scale_${scale}`])}>
     {canvas.map((row, y) => (
        <Row key={y}>
          {row.map((cell, x) => (
            <Cell cell={cell}
                  key={x}
                  x={x}
                  y={y}>
              {cell && <Loop icon={`${cell.loop}.svg`} />}
            </Cell>
          ))}
        </Row>
      ))}
    </div>
  )
}

const mapState = state => ({
  canvas: state.canvas
})

export default connect(mapState)(Canvas)
