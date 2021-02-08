import scss from './CreateForm.module.scss'

import Input from '@components/form/Input/Input'
import InputNumber from '@components/form/Input/InputNumber'

export default function CreateForm () {
  return (
    <form className={scss.form}>
      <div className={scss.legend}>
        Введите параметры для схемы
      </div>
      <label className={scss.field}>
        <span className={scss.label}>
          Название схемы
        </span>
        <span className={scss.input}>
          <Input type="text" />
        </span>
      </label>
      <label className={scss.field}>
        <span className={scss.label}>
          Количество рядов
        </span>
        <span className={scss.input}>
          <InputNumber />
        </span>
      </label>
      <label className={scss.field}>
        <span className={scss.label}>
          Количество петель
        </span>
        <span className={scss.input}>
          <InputNumber />
        </span>
      </label>
    </form>
  )
}
