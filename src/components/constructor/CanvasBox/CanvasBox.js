import scss from './CanvasBox.module.scss'

import classNames from 'classnames'

import Canvas from '@components/constructor/Canvas/Canvas'

export default function CanvasBox ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      <Canvas />
    </div>
  )
}
