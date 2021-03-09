import scss from './CreateForm.module.scss'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { connect } from 'react-redux'
import { uid } from 'uid'

import Field from '@components/form/Field/Field'
import { Input, Number } from '@components/form/Input/Input'
import { Checkbox } from '@components/form/Checkbox/Checkbox'
import Button from '@components/common/Button/Button'

import * as store from '@store/functions'

function CreateForm ({ dispatch }) {
  const router = useRouter()

  const [name, setName] = useState('Моя схема')
  const [rows, setRows] = useState(2)
  const [cols, setCols] = useState(2)
  const [onlyOdd, setOnlyOdd] = useState(false)
  const [customCells, setCustomCells] = useState(false)

  const createScheme = ev => {
    const schemeUid = uid()

    ev.preventDefault()

    dispatch(store.createScheme({
      uid: schemeUid,
      name,
      rows,
      cols,
      onlyOdd,
      customCells
    }))

    router.push(`/constructor/${schemeUid}`)
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
                min="2"
                max="100"
                setter={setRows}
                value={rows} />
      </Field>
      <Field label="Количество петель"
             labelClassName={scss.label}
             id={3}>
        <Number id={3}
                min="2"
                max="100"
                className={scss.number}
                setter={setCols}
                value={cols} />
      </Field>
      <Field>
        <Checkbox className={scss.checkbox}
                  checked={onlyOdd}
                  setter={setOnlyOdd}
                  label="Схема узора только для лицевых рядов" />
      </Field>
      <Field>
        <Checkbox className={scss.checkbox}
                  checked={customCells}
                  setter={setCustomCells}
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
