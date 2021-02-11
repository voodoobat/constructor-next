import scss from './LegendContainer.module.scss'

import classNames from 'classnames'

import Legend from '@components/constructor/Legend/Legend'
import Group from '@components/canvas/Group/Group'

export default function LegendContainer ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      <div className={scss.caption}>
        Условные обозначения:
      </div>
      <div className={scss.content}>
        <Legend className={scss.legend}>
          <Group matrix={[[3,3,3,7], [9,3,5,21]]} />
        </Legend>
        <Legend className={scss.legend}
                legend="Стопицот колонок">
          <Group matrix={[[3,3,3,7,4,4,9,27,9,3,5,21,23,23,7,4,9,27,9,3,5,21]]} />
        </Legend>
        <Legend className={scss.legend}
                legend="Стопицот рядов">
          <Group matrix={[[3], [9], [3], [27], [4], [9], [27], [33], [3]]} />
        </Legend>
        <Legend className={scss.legend}>
          <Group matrix={[[3,3,3,7,4,4,9,27], [9,3,5,21,23,23,7,4]]} />
        </Legend>
      </div>
    </div>
  )
}
