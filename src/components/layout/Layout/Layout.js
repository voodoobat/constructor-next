import scss from './Layout.module.scss'

import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'

export default function Layout ({ smallHeader = false, children }) {
  return (
    <div className={scss._}>
      <Header small={smallHeader} />
      <main className={scss.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
