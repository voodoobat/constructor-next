import scss from './Legend.module.scss'

import classNames from 'classnames'

import RemoveIcon from './svg/remove.svg'
// import RestoreIcon from './svg/restore.svg'

export default function CanvasBox ({ className, legend, children }) {
  return (
    <div className={classNames(className, scss._)}>
      <i className={scss.icon}>
        <RemoveIcon className={scss.icon_svg} />
      </i>
      <div className={scss.element}>
        {children}
      </div>
      <div className={scss.legend} contentEditable>
        {legend || 'Мой элемент'}
      </div>
    </div>
  )
}
