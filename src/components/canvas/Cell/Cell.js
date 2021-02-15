import scss from './Cell.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'

const mapState = state => ({
  activeLoop: state.activeLoop
})

export default connect(mapState)(({ className, children, activeLoop }) => {
  const [loop, setLoop] = useState(children)

  return (
    <div className={classNames(className, scss._)}
         onClick={() => setLoop(
           <Loop icon={`${activeLoop}.svg`} />
         )}>
      {loop}
    </div>
  )
})
