import scss from './GroupContainer.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Group from '@components/canvas/Group/Group'
import Dropdown from '@components/common/Dropdown/Dropdown'

function GroupContainer ({ className, groups }) {
  return (
    <div className={classNames(className, scss._)}>
      <Dropdown caption="Мои группы элементов"
                size="sm">
        <div className={scss.content}>
          {groups.map((group, key) =>
            <Group group={group}
                   key={key} />
          )}
        </div>
      </Dropdown>
    </div>
  )
}

export default connect((state => ({ ...state })))(GroupContainer)
