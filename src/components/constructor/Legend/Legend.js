import scss from './Legend.module.scss'

import classNames from 'classnames'

import RemoveIcon from './svg/remove.svg'
// import RestoreIcon from './svg/restore.svg'

export default function CanvasBox ({ className, legend, children }) {
  return (
    <div className={classNames(className, scss._)}>
      <div className={scss.legend}>
        <i className={scss.icon}>
          <RemoveIcon />
        </i>
        <div className={scss.element}>
          {children}
        </div>
        <div className={scss.caption} contentEditable>
          {legend || 'Мой элемент'}
        </div>
      </div>
    </div>
  )
}
