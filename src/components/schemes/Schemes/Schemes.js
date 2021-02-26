import scss from './Schemes.module.scss'

import Container from '@components/layout/Container/Container'
import Dropdown from '@components/common/Dropdown/Dropdown'
import { SchemeButton, SchemeButtonCreate } from '@src/components/schemes/SchemeButton/SchemeButton'

const s = []
for (let j = 0; j < 10; j++) {
  let name = 'Моя первая схема в этом онлайн-конструкторе'

  if (j == 1) {
    name = 'Моя первая схема'
  }

  if (j == 2) {
    name = 'Моя первая схема с длинным названием в этом онлайн-конструкторе'
  }

  s.push({
    uid: j, name 
  })
}

export default function Schemes () {
  return (
    <div className={scss.schemes}>
      <Container>
        <Dropdown caption="Схемы для вязания спицами">
          <div className={scss.container}>
            <SchemeButtonCreate href="/constructor/create"
                                className={scss.scheme} /> 
            {s.map(({ uid, name }) => (
              <SchemeButton className={scss.scheme}
                            key={uid}
                            image="images/scheme_1.png"
                            name={name}
                            date="30.09.2020"
                            href="/constructor" />
            ))}
          </div>
        </Dropdown>
        <Dropdown caption="Схемы для вязания крючком">
          <SchemeButtonCreate href="/constructor"
                              className={scss.scheme} />
        </Dropdown>
      </Container>
    </div>
  )
}
