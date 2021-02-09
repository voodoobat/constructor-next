import scss from './LoopPanel.module.scss'

import classNames from 'classnames'

import LoopButton from '@components/constructor/LoopButton/LoopButton'

// TODO: replace this shit with api 
const loops = []
for (let j = 1; j <= 33; j++) {
  loops.push(j)
}

export default function LoopsBar ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      {loops.map(id =>
        <LoopButton id={id} key={id} />
      )} {loops.map(id =>
        <LoopButton id={id} key={id} />
      )}
    </div>
  )
}
