import scss from './LoopPanel.module.scss'

import classNames from 'classnames'

import LoopButton from '@components/constructor/LoopButton/LoopButton'

// TODO: replace this shit with api 
import { getData } from '@src/fixtures/loops'

export default function LoopsBar ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      {getData().map(loop =>
        <LoopButton className={scss.button}
                    data={loop}
                    key={loop.id} />
      )}
    </div>
  )
}
