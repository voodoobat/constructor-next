import scss from './GroupContainer.module.scss'

import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'
import classNames from 'classnames'

import Group from '@components/canvas/Group/Group'
import Dropdown from '@components/common/Dropdown/Dropdown'

function GroupContainer ({ className, groups }) {
  return (
    <Dropdown className={classNames(className, scss._)}
              caption="Мои группы элементов"
              size="sm">
      <Masonry className={scss.content}>
        {groups.map((group, key) =>
          <Group group={group}
                key={key} />
        )}
      </Masonry>
    </Dropdown>
  )
}

export default connect((state => ({ ...state })))(GroupContainer)
