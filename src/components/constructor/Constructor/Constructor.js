import scss from './Constructor.module.scss'

import classNames from 'classnames'

import Container from '@components/layout/Container/Container'
import TopPanel from '@components/constructor/TopPanel/TopPanel'
import ToolBar from '@components/constructor/ToolBar/ToolBar'

export default function Constructor ({ className, inactive, children }) {
  return (
    <Container className={classNames(className, scss._)}>
      <TopPanel className={scss.top_panel} />
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
