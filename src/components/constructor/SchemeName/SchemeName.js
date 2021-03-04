import scss from './SchemeName.module.scss'

import { useRef } from 'react'
import { connect } from 'react-redux'
import ContentEditable from 'react-contenteditable'
import striptags from 'striptags'
import classNames from 'classnames'

import * as store from '@store/functions'

function SchemeName ({ className, schemeName, dispatch }) {
  const editable = useRef(null)
  const change = ({ target }) => {
    const { value } = target
    const name = value.length > 50 ? schemeName : value

    dispatch(store.setSchemeName(
      striptags(name) ||
      'Моя схема'
    ))
  }

  return (
    <ContentEditable className={classNames(className, scss._)}
                     innerRef={editable}
                     onChange={change}
                     html={schemeName} />
  )
}

export default connect((state => ({ ...state })))(SchemeName)
