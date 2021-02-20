import scss from './GroupContainer.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Dropdown from '@components/common/Dropdown/Dropdown'
import Group from '@components/canvas/Group/Group'
import Plait from '@components/canvas/Plait/Plait'

function GroupContainer ({ className, groups, plaits }) {
  return (
    <div className={classNames(className, scss._)}>
      <Dropdown caption="Элементы для кос"
                size="sm">
        <div className={classNames(scss.content)}>
          {plaits.map((plait, key) =>
            <Plait className={scss.plait}
                   plait={plait}
                   key={key} />
          )}
        </div>
      </Dropdown>
      <Dropdown caption="Мои группы элементов"
                size="sm">
        <div className={scss.content}>
          {groups.map((group, key) =>
            <Group className={scss.group}
                   group={group}
                   key={key} />
          )}
        </div>
      </Dropdown>
    </div>
  )
}

export default connect((state => ({ ...state })))(GroupContainer)
