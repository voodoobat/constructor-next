import scss from './CreateForm.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'

import Field from '@components/form/Field/Field'
import { Input, Number } from '@components/form/Input/Input'
import { Checkbox } from '@components/form/Checkbox/Checkbox'
import Button from '@components/common/Button/Button'

function CreateForm ({ dispatch }) {

  const [name, setName] = useState('')
  const [rows, setRows] = useState(0)
  const [cols, setCols] = useState(10)

  const createScheme = ev => {
    ev.preventDefault()
    console.log(name, rows, cols)
  }

  return (

    <form className={scss._}
          onSubmit={createScheme}>
      <Field className={scss.caption}>
        Введите параметры для схемы
      </Field>
      <Field label="Название схемы"
             labelClassName={scss.label}
             id={1}>
        <Input id={1}
               setter={setName}
               value={name} />
      </Field>
      <Field label="Количество рядов"
             labelClassName={scss.label}
             id={2}>
        <Number className={scss.number}
                id={2}
                setter={setRows}
                value={rows} />
      </Field>
      <Field label="Количество петель"
             labelClassName={scss.label}
             id={3}>
        <Number id={3}
                className={scss.number}
                setter={setCols}
                value={cols} />
      </Field>
      <Field>
        <Checkbox className={scss.checkbox}
                  label="Схема узора только для лицевых рядов" />
      </Field>
      <Field>
        <Checkbox className={scss.checkbox}
                  label="Вписать нумерацию петель вручную" />
      </Field>
      <Field className={scss.submit}>
        <Button type="submit"
                color="default"
                size="large">
          Создать поле для схемы
        </Button>
      </Field>
    </form>
  )
}

export default connect(state => ({ ...state }))(CreateForm)
