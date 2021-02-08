import scss from './Schemes.module.scss'

import Container from '@components/layout/Container/Container'
import SchemesDropdown from '@components/schemes/SchemesDropdown/SchemesDropdown'
import SchemeButton from '@src/components/schemes/SchemeButton/SchemeButton'
import SchemeButtonCreate from '@src/components/schemes/SchemeButton/SchemeButtonCreate'

export default function Schemes () {
  return (
    <div className={scss.schemes}>
      <Container>
        <SchemesDropdown caption="Схемы для вязания спицами">
          <SchemeButtonCreate href="/constructor/create"
                              className={scss.scheme} />
          <SchemeButton className={scss.scheme}
                        image="images/scheme_1.png"
                        name="Моя первая схема в этом онлайн-конструкторе"
                        date="30.09.2020"
                        href="/" />
          <SchemeButton className={scss.scheme}
                        image="images/scheme_1.png"
                        name="Моя первая схема в этом онлайн-конструкторе"
                        date="30.09.2020"
                        href="/" />
        </SchemesDropdown>
        <SchemesDropdown caption="Схемы для вязания крючком">
          <SchemeButtonCreate href="/constructor"
                              className={scss.scheme} />
        </SchemesDropdown>
      </Container>
    </div>
  )
}
