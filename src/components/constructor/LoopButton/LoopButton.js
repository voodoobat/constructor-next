import scss from './LoopButton.module.scss'

import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'
import OptionsIcon from './svg/options_icon.svg'

export default function LoopButton ({ className, data }) {
  const selected = data.id == 27

  return (
    <div className={classNames(className, scss._, selected ? scss.is_selected : '')}>
      <div className={classNames(scss.button, scss.button_main)}>
        <Loop id={data.id} />
        {data.hint &&
          <div className={classNames(scss.hint, scss.hint_down)}
               dangerouslySetInnerHTML={{
                 __html: data.hint
               }}>
          </div>
        }
        {data.options && <OptionsIcon className={scss.options_icon} />}
      </div>
      {data.options && (
        <div className={scss.dropdown}>
          <div className={scss.dropdown_data}>
            {data.options.map(({ id, hint }) => (
              <div className={scss.button} key={id}>
                <Loop id={id} />
                {hint &&
                  <div className={classNames(scss.hint, scss.hint_right)}
                      dangerouslySetInnerHTML={{
                        __html: hint
                      }}>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
