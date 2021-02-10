import scss from './LoopPanel.module.scss'

import classNames from 'classnames'

import LoopButton from '@components/constructor/LoopButton/LoopButton'

// TODO: replace this shit with api 
const getData = () => {
  const data = []

  for (let j = 1; j <= 60; j++) {
    if (j != 13 && j != 14 && j != 15 &&
        j != 16 && j != 28 && j != 29 &&
        j != 30 && j != 31 && j != 32) {
      data.push({ id: j })
    }
  }

  data[11].options = [{ id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }]
  data[22].options = [{ id: 28 }, { id: 29 }, { id: 30 }, { id: 31 }, { id: 32 }]

  return data
}

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
