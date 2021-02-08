import scss from './Container.module.scss'

export default function Container ({ className = '', children }) {
  return (
    <div className={`${className} ${scss.container}`}>
      {children}
    </div>
  )
}
