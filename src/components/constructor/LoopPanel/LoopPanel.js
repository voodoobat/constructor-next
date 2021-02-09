import scss from './LoopPanel.module.scss'

import classNames from 'classnames'

import LoopButton from '@components/constructor/LoopButton/LoopButton'
import Overlay from '@components/common/Overlay/Overlay'

// TODO: replace this shit with api 
const loops = []
for (let j = 1; j <= 33; j++) {
  loops.push(j)
}

export default function LoopsBar ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      {loops.map(id =>
        <LoopButton className={scss.button}
                    id={id}
                    key={id} />
      )}
      {loops.map(id =>
        <LoopButton className={scss.button}
                    id={id}
                    key={id} />
      )}
    </div>
  )
}
