import { Component } from 'react'
import scss from './Constructor.module.scss'

import classNames from 'classnames'

import Container from '@components/layout/Container/Container'

export default function Constructor ({ className, children }) {
  return (
    <Container className={classNames(className, scss.constructor)}>
      <div className={scss.tools}>

      </div>
      <div className={scss.main}>
        <div className={scss.loops}>

        </div>
        <div className={scss.content}>
          {children}
        </div>
      </div>
    </Container>
  )
}
