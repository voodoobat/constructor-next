import scss from './Colorpicker.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import { SketchPicker } from 'react-color'
import classNames from 'classnames'

import Button from '@components/common/Button/Button'

import * as store from '@src/functions'

function Colorpicker ({ className, dispatch, activeColor }) {
  const [color, setColor] = useState(activeColor || 'transparent')

  const onChange = ({ hex }) => {
    setColor(hex)
    dispatch(store.setActiveColor(hex))
  }

  return (
    <div className={classNames(className, scss._)}>
      <SketchPicker color={color}
                    onChangeComplete={onChange} />
      <Button color="red">
        Отмена
      </Button>
      <Button color="blue" onClick={() => dispatch(store.setActiveColor(color))}>
        Сохранить
      </Button>
    </div>
  )
}

export default connect(state => ({ ...state }))(Colorpicker)
