import scss from './LoopButton.module.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'

import * as actions from '@src/actions'

import OptionsIcon from './svg/options_icon.svg'


const Hint = ({ className, hint }) => (
  <div className={classNames(className, scss.hint)}
        dangerouslySetInnerHTML={{
          __html: hint
        }}>
  </div>
)

function LoopButton ({ className, data, activeLoop, setActiveLoop }) {
  const isActive = activeLoop == data.id

  return (
    <div className={classNames(className, scss._, isActive ? scss.is_selected : '')}
         onClick={() => setActiveLoop(data.id)}>
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

const mapDispatch = dispatch => {
  const { setActiveLoop } = bindActionCreators(actions, dispatch)

  return {
    setActiveLoop
  }
}

export default connect(mapState, mapDispatch)(LoopButton)
