import scss from './Constructor.module.scss'

import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import Container from '@components/layout/Container/Container'
import TopPanel from '@components/constructor/TopPanel/TopPanel'
import ToolBar from '@components/constructor/ToolBar/ToolBar'
import GroupContainer from '@components/canvas/GroupContainer/GroupContainer'
import SchemeName from '@components/constructor/SchemeName/SchemeName'
import Download from '@components/constructor/Download/Download'

import * as store from '@store/functions'

function Constructor ({ className, inactive, children, dispatch }) {
  const { query }  = useRouter()

  dispatch(store.setSchemeByUid(query))

  return (
    <Container className={classNames(className, scss._)}>
      {!inactive &&
        <div className={scss.header}>
          <SchemeName className={scss.name} />
          <div className={scss.note}>
            Все изменения сохранены автоматически в личном кабинете/ в этом браузере
          </div>
          <div className={scss.download}>
            <Download />
          </div>
        </div>
      }
      <TopPanel className={scss.top_panel}
                inactive={inactive} />
      <GroupContainer inactive={inactive} />
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

export default connect(state => ({ ...state }))(Constructor)
