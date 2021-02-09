import scss from './Constructor.module.scss'

import classNames from 'classnames'

import Container from '@components/layout/Container/Container'
import ToolBar from '@components/constructor/ToolBar/ToolBar'
import LoopPanel from '@src/components/constructor/LoopPanel/LoopPanel'

export default function Constructor ({ className, inactive, children }) {
  return (
    <Container className={classNames(className, scss._)}>
      <div className={scss.loops}>
        <LoopPanel />
      </div>
      <div className={scss.main}>
        <div className={scss.tools}>
          <ToolBar inactive={inactive} />
        </div>
        <div className={scss.content}>
          {children}
        </div>
      </div>
    </Container>
  )
}
