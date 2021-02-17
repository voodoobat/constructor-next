import scss from './GroupContainer.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Group from '@components/canvas/Group/Group'

function GroupContainer ({ className, groups }) {
  return (
    <div className={classNames(className, scss._)}>
      {groups.map((group, key) => <Group group={group} key={key} />)}
    </div>
  )
}

export default connect((s => ({ ...s })))(GroupContainer)
