import scss from './ToolBar.module.scss'

import classNames from 'classnames'
import { Tool } from '@components/constructor/Tool/Tool'

export default function ToolBar ({ className }) {
  return (
    <nav className={classNames(className, scss._)}>
      <Tool className={scss.tool}
            type="Move" />
      <Tool className={scss.tool}
            type="Eraze" />
      <Tool className={scss.tool}
            type="ReportRow" />
      <Tool className={scss.tool}
            type="ReportLoop" />
      <Tool className={scss.tool}
            type="Color" />
      <Tool className={scss.tool}
            type="Group" />
      <Tool className={scss.tool}
            type="Size" />
    </nav>
  )
}
