import scss from './GroupContainer.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Dropdown from '@components/common/Dropdown/Dropdown'
import Group from '@components/canvas/Group/Group'
import Plait from '@components/canvas/Plait/Plait'
import Overlay from '@components/common/Overlay/Overlay'

function GroupContainer ({ className, groups, plaits, inactive }) {
  return (
    <div className={classNames(className, scss._)}>
      <Dropdown caption="Элементы для кос"
                active={false}
                size="sm">
        <div className={classNames(scss.content)}>
          {plaits.map((plait, key) =>
            <Plait className={scss.plait}
                   plait={plait}
                   key={key} />
          )}
        </div>
      </Dropdown>
      {Boolean(groups.length) &&
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
      }

      {inactive && <Overlay />}
    </div>
  )
}

export default connect((state => ({ ...state })))(GroupContainer)
