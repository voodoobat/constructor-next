import scss from './GroupContainer.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Dropdown from '@components/common/Dropdown/Dropdown'
import Group from '@components/canvas/Group/Group'
import Plait from '@components/canvas/Plait/Plait'
import Overlay from '@components/common/Overlay/Overlay'

import QuestionIcon from './svg/question.svg'
import Hint from '@components/common/Hint/Hint'

function GroupContainer ({ className, schemeGroups, plaits, inactive }) {

  return (
    <div className={classNames(className, scss._)}>
      <Dropdown caption="Элементы для кос"
                active={false}
                size="sm">
        <div className={classNames(scss.content)}>
          {plaits.map((plait, key) =>
            <Plait className={scss.plait}
                   plait={plait}
                   key={key} />
          )}
        </div>
      </Dropdown>
      {schemeGroups.length ? (
        <Dropdown caption="Мои группы элементов"
                  size="sm">
          <div className={scss.content}>
            {schemeGroups.map((group, key) =>
              <Group className={scss.group}
                    group={group}
                    key={key} />
            )}
          </div>
        </Dropdown>
      ) : (
        <div className={scss.no_group}>
          <span className={scss.no_group_text}>
            Мои группы элементов
          </span>
          <div className={scss.question}>
            <QuestionIcon />
            <Hint className={scss.question_hint}
                  caption="Создай группу">
              c группами веселей
            </Hint>
          </div>
        </div>
      )}

      {inactive && <Overlay />}
    </div>
  )
}

export default connect((state => ({ ...state })))(GroupContainer)
