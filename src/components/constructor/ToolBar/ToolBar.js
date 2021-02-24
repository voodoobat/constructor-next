import scss from './ToolBar.module.scss'

import { connect } from 'react-redux'
import { SketchPicker } from 'react-color'
import classNames from 'classnames'

import Tool from '@components/constructor/Tool/Tool'
import Hint from '@src/components/common/Hint/Hint'
import Overlay from '@components/common/Overlay/Overlay'

function ToolBar ({ className, inactive, activeTool }) {
  return (
    <nav className={classNames(className, scss._)}>
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
            type="ReportRow">
        <Hint className={scss.hint}
              caption="Раппорт рядов">
          Определяет раппорт исходя из количества выбранных рядов
        </Hint>
      </Tool>
      <Tool className={scss.tool}
            type="ReportLoop">
        <Hint className={scss.hint}
              caption="Раппорт петель">
          Определяет раппорт исходя из количества выбранных рядов
        </Hint>
      </Tool>
      <Tool className={scss.tool}
            type="Color">
        {activeTool == 'Color' && <SketchPicker className={scss.colorpicker} />}
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
            type="Size">
        <Hint className={scss.hint}
              caption="Редактировать размеры схемы">
          Добавляйте и удаляйте необходимое количестворядов или строк в схеме
        </Hint>
      </Tool>
      {inactive && <Overlay />}
    </nav>
  )
}

export default connect(state => ({ ...state }))(ToolBar)
