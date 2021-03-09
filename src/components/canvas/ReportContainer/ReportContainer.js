import scss from './ReportContainer.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Report from '@components/canvas/Report/Report'

function ReportContainer ({ className, schemeReports }) {
  return <>
    <div className={classNames(className, scss.cell_container)}>
      {schemeReports.map((report, index) => <>
        <Report report={report}
                index={index}
                key={report.uid}
                type="cell" />
      </>)}
    </div>
    <div className={classNames(className, scss.rows_container)}>
      {schemeReports.map((report, index) => <>
        <Report report={report}
                index={index}
                key={report.uid}
                type="rows" />
      </>)}
    </div>
  </>
}

export default connect(state => ({ ...state }))(ReportContainer)
