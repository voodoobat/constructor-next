import scss from './CreateForm.module.scss'

import Field from '@components/form/Field/Field'
import { Input, Number } from '@components/form/Input/Input'
import { Checkbox } from '@components/form/Checkbox/Checkbox'
import Button from '@components/common/Button/Button'

export default function CreateForm () {
  return (
    <form className={scss._}>
      <Field className={scss.caption}>
        Введите параметры для схемы
      </Field>
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
