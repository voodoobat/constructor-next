import scss from './SchemesDropdown.module.scss'

import { useState } from 'react'
import classNames from 'classnames'

import Chevron from './svg/chevron.svg'

export default function SchemesDropdown ({ className, caption, children }) {
  const [isCollapsed, setCollapsed] = useState(false)

  return (
    <div className={classNames(className, scss.dropdown, isCollapsed ? scss.is_collapsed : null)}>
      <button className={scss.caption}
              onClick={() => setCollapsed(!isCollapsed)}>
        <span className={scss.caption_text}>{caption}</span>
        <Chevron className={scss.chevron} />
      </button>
      <div className={scss.content}>
        {children}
      </div>
    </div>
  )
}
