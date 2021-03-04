import scss from './LoopButton.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'

import * as store from '@store/functions'

import OptionsIcon from './svg/options_icon.svg'

const Hint = ({ className, hint }) => (
  <div className={classNames(className, scss.hint)}
        dangerouslySetInnerHTML={{
          __html: hint
        }}>
  </div>
)

function LoopButton ({ className, data, activeLoop, dispatch }) {
  const { id } = data
  const isActive = activeLoop == id

  const onClick = () => {
    dispatch(store.setActiveLoop(id, data.icon))
  }

  return (
    <div className={classNames(className, scss._, isActive ? scss.is_selected : '')}
         onClick={onClick}>
      <div className={classNames(scss.button, scss.button_main)}>
        <Loop icon={data.icon} />
        {data.options && <OptionsIcon className={scss.options_icon} />}
        {data.hint &&
          <Hint className={classNames(data.options != null ? scss.hint_up : scss.hint_down)}
                hint={data.hint} />
        }
      </div>
      {data.options && (
        <div className={scss.dropdown}>
          <div className={scss.dropdown_data}>
            {data.options.map(({ id, icon, hint }) => (
              <div className={scss.button} key={id}>
                <Loop icon={icon} />
                {hint && <Hint className={scss.hint_right} hint={hint} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const mapState = state => ({
  activeLoop: state.activeLoop
})

export default connect(mapState)(LoopButton)
