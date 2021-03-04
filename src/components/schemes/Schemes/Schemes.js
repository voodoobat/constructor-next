import scss from './Schemes.module.scss'

import Container from '@components/layout/Container/Container'
import Dropdown from '@components/common/Dropdown/Dropdown'
import { SchemeButton, SchemeButtonCreate } from '@src/components/schemes/SchemeButton/SchemeButton'

export default function Schemes ({ schemes }) {
  return (
    <div className={scss.schemes}>
      <Container>
        <Dropdown caption="Схемы для вязания спицами">
          <div className={scss.container}>
            <SchemeButtonCreate href="/constructor/create"
                                className={scss.scheme} /> 
            {schemes.map(({ schemeUid, schemeName }) => (
              <SchemeButton className={scss.scheme}
                            key={schemeUid}
                            image="images/scheme_1.png"
                            name={schemeName}
                            date="30.09.2020"
                            href={`/constructor/${schemeUid}`} />
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
