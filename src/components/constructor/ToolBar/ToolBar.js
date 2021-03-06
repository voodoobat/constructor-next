import scss from './ToolBar.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Tool from '@components/constructor/Tool/Tool'
import Hint from '@components/common/Hint/Hint'
// import UndoRedo from '@components/constructor/UndoRedo/UndoRedo'
import Swatches from '@components/constructor/Swatches/Swatches'
import Resize from '@components/constructor/Resize/Resize'
import Overlay from '@components/common/Overlay/Overlay'

function ToolBar ({ className, inactive }) {
  return (
    <div className={classNames(className, scss._)}>
      {/* <UndoRedo className={scss.history} /> */}
      <nav className={scss.bar}>
        <Tool className={scss.tool}
              type="Move">
          <Hint className={scss.hint}
                caption="Рука">
            Позволяет передвигаться по рабочему полю схемы 
          </Hint>
        </Tool>
        <Tool className={scss.tool}
              type="Eraze">
          <Hint className={scss.hint}
                caption="Ластик">
            Удаляет выбранные в поле схемы элементы
          </Hint>
        </Tool>
        <Tool className={scss.tool}
              type="Report">
          <Hint className={scss.hint}
                caption="Раппорт">
            Определяет раппорт
          </Hint>
        </Tool>
        {/* <Tool className={scss.tool}
              type="ReportRow">
          <Hint className={scss.hint}
                caption="Раппорт рядов">
            Определяет раппорт исходя из количества выбранных рядов
          </Hint>
        </Tool> */}
        {/* <Tool className={scss.tool}
              type="ReportLoop">
          <Hint className={scss.hint}
                caption="Раппорт петель">
            Определяет раппорт исходя из количества выбранных рядов
          </Hint>
        </Tool> */}
        <Tool className={scss.tool}
              type="Color"
              tool={<Swatches />}>
          <Hint className={scss.hint}
                caption="Заливка цветом">
            Окрашивает цветом необходимые областисхемы
          </Hint>
        </Tool>
        <Tool className={scss.tool}
              type="Group">
          <Hint className={scss.hint}
                caption="Группировка">
            Группирует выбранные объекты в новый элементсхемы
          </Hint>
        </Tool>
        <Tool className={scss.tool}
              tool={<Resize />}
              type="Size">
          <Hint className={scss.hint}
                caption="Редактировать размеры схемы">
            Добавляйте и удаляйте необходимое количестворядов или строк в схеме
          </Hint>
        </Tool>
      </nav>
      {inactive && <Overlay />}
    </div>
  )
}

export default connect(state => ({ ...state }))(ToolBar)
