import scss from './CreateForm.module.scss'

import { Input, Number } from '@components/form/Input/Input'
import Field from '@src/components/form/Field/Field'

export default function CreateForm () {
  return (
    <form className={scss.form}>
      <Field label="Название схемы"
             labelClassName={scss.label}
             id={1}>
        <Input id={1} />
      </Field>
      <Field label="Количество рядов"
             labelClassName={scss.label}
             id={2}>
        <Number className={scss.number}
                id={2} />
      </Field>
      <Field label="Количество петель"
             labelClassName={scss.label}
             id={3}>
        <Number id={3}
                className={scss.number} />
      </Field>
    </form>
  )
}
