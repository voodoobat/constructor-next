import scss from './Welcome.module.scss'

import Container from '@components/layout/Container/Container'

export default function Welcome () {
  return (
    <div className={scss.welcome}>
      <Container>
        <h1>Welcome</h1>
      </Container>
    </div>
  )
}
