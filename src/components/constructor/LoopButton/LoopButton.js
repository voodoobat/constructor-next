import scss from './LoopButton.module.scss'

import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'
import OptionsIcon from './svg/options_icon.svg'

export default function LoopButton ({ className, data }) {
  return (
    <div className={classNames(className, scss._)}>
      <div className={classNames(scss.button, scss.button_is_selected)}>
        <Loop id={data.id} />
        {data.options && <OptionsIcon className={scss.options_icon} />}
      </div>
      {data.options && (
        <div className={scss.dropdown}>
          <div className={scss.dropdown_data}>
            {data.options.map(({ id }) => (
              <div className={scss.button} key={id}>
                <Loop id={id} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
