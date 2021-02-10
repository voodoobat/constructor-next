import scss from './CanvasBox.module.scss'

import classNames from 'classnames'

import Canvas from '@components/constructor/Canvas/Canvas'
import Legend from '@components/constructor/Legend/Legend'

export default function CanvasBox ({ className }) {
  return (
    <>
      <div className={classNames(className, scss._)}>
        <Canvas />
      </div>
      <div className={scss.legend_box}>
        <Legend>
        </Legend>
      </div>
    </>
  )
}
