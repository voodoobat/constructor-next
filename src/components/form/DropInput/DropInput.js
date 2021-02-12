import scss from './DropInput.module.scss'

import Dropzone from 'react-dropzone'
import classNames from 'classnames'

export default function DropInput ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      <Dropzone onDrop={f => console.log(f)}>
        {({ getRootProps, getInputProps }) => ( 
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p className={scss.hint}>
              Кликните для загрузки <br /> или перетащите файл
            </p>
          </div> 
        )}
      </Dropzone>
    </div>
  )
}
