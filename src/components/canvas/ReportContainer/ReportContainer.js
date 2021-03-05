import scss from './ReportContainer.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Report from '@components/canvas/Report/Report'

function ReportContainer ({ className, schemeReports }) {
  return (
    <div className={classNames(className, scss._)}>
      {schemeReports.map(report => (
        <Report report={report} key={report.uid} />
      ))}
    </div>
  )
}

export default connect(state => ({ ...state }))(ReportContainer)
