import scss from './Constructor.module.scss'

import classNames from 'classnames'

import Container from '@components/layout/Container/Container'
import TopPanel from '@components/constructor/TopPanel/TopPanel'
import ToolBar from '@components/constructor/ToolBar/ToolBar'
import Download from '@components/constructor/Download/Download'

export default function Constructor ({ className, inactive, children }) {
  return (
    <Container className={classNames(className, scss._)}>
      <div className={scss.header}>
        <div className={scss.name}>
          Схема 1
        </div>
        <div className={scss.note}>
          Все изменения сохранены автоматически в личном кабинете/ в этом браузере
        </div>
        <div className={scss.download}>
          <Download />
        </div>
      </div>
      <TopPanel className={scss.top_panel}
                inactive={inactive} />
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
