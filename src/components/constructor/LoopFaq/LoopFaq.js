import scss from './LoopFaq.module.scss'

import classNames from 'classnames'

// import Cell from '@components/canvas/Cell/Cell'
// import Loop from '@components/constructor/Loop/Loop'

// TODO: replace this shit with api 
// import { getData } from '@src/fixtures/loops'

// const Element = ({ loop }) => (
  // <div className={scss.element}>
  //   <div className={scss.icon}>
  //     <Cell loop={loop} />
  //   </div>

  //   <div className={scss.hint}>
  //     <span dangerouslySetInnerHTML={{ __html: loop.hint }} />
  //   </div>
  // </div>
// )

export default function LoopFaq ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      {/* {getData(true).map(loop => loop.hint && (
        <Element loop={loop} />

      ))} */}
    </div>
  )
}
