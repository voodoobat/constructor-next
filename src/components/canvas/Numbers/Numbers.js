import scss from './Numbers.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import CustomNumbers from '../CustomNumbers/CustomNumbers'

import * as fn from './Numbers.fn'


function Numbers ({
  className,
  schemeCanvas,
  schemeOnlyOddCells,
  schemeCustomCells
}) {
  const nums = fn.getCellNums(schemeCanvas[0]?.length || 0, schemeOnlyOddCells)

  return (
    <div className={classNames(className, scss._)}>
      {schemeCustomCells.length
        ? <CustomNumbers />
        : nums.map(n => <div className={scss.num} key={n}>{n}</div>)
      }
    </div>
  )
}

export default connect(state => ({ ...state }))(Numbers)
