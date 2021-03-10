import scss from './LegendContainer.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Legend from '@components/constructor/Legend/Legend'
import Cell from '@components/canvas/Cell/Cell'

import { getData } from '@src/fixtures/loops'
const data = getData(true)

function LegendContainer ({ className, schemeLegends }) {

  const withLegends = src => src.map(({ element, customHint }) => {
    const hint = customHint || data.find(el => el.id == element.loop).hint

    return {
      ...element,
      background: '#ffffff',
      hint
    }
  })

  withLegends(schemeLegends)

  return <>
    {!!schemeLegends.length &&
      <div className={classNames(className, scss._)}>
        <div className={scss.caption}>
          Условные обозначения:
        </div>
        <div className={scss.content}>
          {withLegends(schemeLegends).map(legend => (
            <Legend className={scss.legend}
                    loop={legend.loop}
                    hint={legend.hint}
                    key={legend.uid}>
              <Cell cell={legend} />
            </Legend>
          ))}
        </div>
      </div>
    }
  </>
}

export default connect((state => ({ ...state })))(LegendContainer)
