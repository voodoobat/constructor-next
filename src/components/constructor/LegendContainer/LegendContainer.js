import scss from './LegendContainer.module.scss'

import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { ReactSortable } from 'react-sortablejs'

import Legend from '@components/constructor/Legend/Legend'
import Cell from '@components/canvas/Cell/Cell'

import * as fn from './LegendsContainer.fn'

import * as store from '@store/functions'

function LegendContainer ({ className, schemeCanvas, schemeLegends, dispatch }) {
  const [legends, setLegends] = useState(schemeLegends)

  const onChange = () => console.log('change'); dispatch(store.setSchemeLegends(legends))
  useEffect(() => setLegends(schemeLegends), [schemeCanvas, schemeLegends])

  return <>
    {!!schemeLegends.length &&
      <div className={classNames(className, scss._)}>
        <div className={scss.caption}>
          Условные обозначения:
        </div>
        <div className={scss.content}>
          <ReactSortable list={legends} setList={setLegends} onChange={onChange}>
            {fn.withLegends(legends).map(legend => (
              <Legend className={scss.legend}
                      loop={legend.loop}
                      hint={legend.hint}
                      key={legend.uid}>
                <Cell cell={legend} />
              </Legend>
            ))}
          </ReactSortable>
        </div>
      </div>
    }
  </>
}

export default connect((state => ({ ...state })))(LegendContainer)
