import scss from './Constructor.module.scss'

import classNames from 'classnames'

import Container from '@components/layout/Container/Container'
import ToolBar from '@components/constructor/ToolBar/ToolBar'

export default function Constructor ({ className, children }) {
  return (
    <Container className={classNames(className, scss._)}>
      <div className={scss.loops}>
        {/* ... */}
      </div>
      <div className={scss.main}>
        <div className={scss.tools}>
          <ToolBar />
        </div>
        <div className={scss.content}>
          {children}
        </div>
      </div>
    </Container>
  )
}
