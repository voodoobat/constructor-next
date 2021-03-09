import scss from './CustomNumbers.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import * as store from '@store/functions'


function CustomNumbers ({ className, schemeCustomCells, dispatch }) {

  const onChange = (ev, key) => {
    const temp = [...schemeCustomCells]

    temp[key] = ev.target.value
    dispatch(store.setSchemeCustomCells(temp))
  }

  return (
    <div className={classNames(className, scss._)}>
      {schemeCustomCells.map((value, key) => (
        <input className={scss.number}
               type="number"
               onChange={ev => onChange(ev, key)}
               value={value}
               key={key} />
      ))}
    </div>
  )
}

export default connect(state => ({ ...state }))(CustomNumbers)
