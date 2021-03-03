import scss from './LegendContainer.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Legend from '@components/constructor/Legend/Legend'
import Cell from '@components/canvas/Cell/Cell'

import { getData } from '@src/fixtures/loops'
const data = getData(true)

function LegendContainer ({ className, schemeLegends }) {

  const withLegends = src => src.map(loop => {
    const { hint } = data.find(el => el.id == loop.loop)
    return {
      ...loop,
      background: '#ffffff',
      hint
    }
  })

  return <>
    {!!schemeLegends.length &&
      <div className={classNames(className, scss._)}>
        <div className={scss.caption}>
          Условные обозначения:
        </div>
        <div className={scss.content}>
          {withLegends(schemeLegends).map((cell, key) => (
            <Legend className={scss.legend}
                    hint={cell.hint} key={key}>
              <Cell cell={cell} />
            </Legend>
          ))}
        </div>
      </div>
    }
  </>
}

export default connect((state => ({ ...state })))(LegendContainer)
