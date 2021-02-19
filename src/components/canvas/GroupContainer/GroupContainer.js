import scss from './GroupContainer.module.scss'

import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'
import classNames from 'classnames'

import Group from '@components/canvas/Group/Group'

function GroupContainer ({ className, groups }) {
  return (
    <Masonry className={classNames(className, scss._)}>
      {groups.map((group, key) =>
        <Group group={group}
               key={key} />
      )}
    </Masonry>
  )
}

export default connect((state => ({ ...state })))(GroupContainer)
