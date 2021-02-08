import scss from './Form.module.scss'

import classNames from 'classnames'

export default function Form ({ className, children }) {
  return (
    <form className={classNames(className, scss.form)}>
      {children}
    </form>
  )
}
