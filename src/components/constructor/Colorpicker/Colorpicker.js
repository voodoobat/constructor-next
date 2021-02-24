import scss from './Colorpicker.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import { SketchPicker } from 'react-color'
import classNames from 'classnames'

import Button from '@components/common/Button/Button'

import * as store from '@src/functions'

function Colorpicker ({ className, dispatch, activeColor, swatches }) {
  const [color, setColor] = useState(activeColor || '#000')
  const [isActive, setActive] = useState(true)

  const onChange = ({ hex }) => {
    setColor(hex)
    dispatch(store.setActiveColor(hex))
  }

  const save = color => {
    dispatch(store.saveColorToSwatches(color))
  }

  return <>
    {isActive &&
      <div className={classNames(className, scss._)}>
        <SketchPicker color={color}
                      disableAlpha={true}
                      onChangeComplete={onChange}
                      presetColors={[]} />
        <div className={scss.swatches}>
          {swatches.map(swatch => (
            <div className={classNames(scss.swatch, color == swatch ? scss.is_active : '')}
                onClick={() => onChange({ hex: swatch })}
                style={{background: swatch}}
                key={swatch}>
              <button className="remove"></button>
            </div>
          ))}
        </div>
        <div className={scss.buttons}>
          <Button onClick={() => save(color)}>
            Сохранить
          </Button>
          <Button onClick={() => setActive(false)}>
            Выбрать
          </Button>
        </div>
      </div>
    }
  </>
}

export default connect(state => ({ ...state }))(Colorpicker)
