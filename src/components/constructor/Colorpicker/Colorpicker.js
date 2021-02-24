import scss from './Colorpicker.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import { SketchPicker } from 'react-color'
import classNames from 'classnames'

import Button from '@components/common/Button/Button'

import * as store from '@src/functions'

function Colorpicker ({ className, dispatch, activeColor, swatches }) {
  const [color, setColor] = useState(activeColor || '#000')

  const onChange = ({ hex }) => {
    setColor(hex)
    dispatch(store.setActiveColor(hex))
  }

  const save = color => {
    console.log(color)
    dispatch(store.saveColorToSwatches(color))
  }

  return (
    <div className={classNames(className, scss._)}>
      <SketchPicker color={color}
                    disableAlpha={true}
                    onChangeComplete={onChange}
                    presetColors={swatches} />
      <Button color="blue" onClick={() => save(color)}>
        Сохранить цвет
      </Button>
    </div>
  )
}

export default connect(state => ({ ...state }))(Colorpicker)
