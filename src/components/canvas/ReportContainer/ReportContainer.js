import scss from './ReportContainer.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Report from '@components/canvas/Report/Report'

function ReportContainer ({ className, schemeReports, type }) {
  return <>
    <div className={classNames(className, scss._, scss[`is_${type}`])}>
      {schemeReports.map((report, index) => (
        <Report report={report}
                index={index}
                key={report.uid}
                type="cell" />
      ))}
    </div>
  </>
}

export default connect(state => ({ ...state }))(ReportContainer)
