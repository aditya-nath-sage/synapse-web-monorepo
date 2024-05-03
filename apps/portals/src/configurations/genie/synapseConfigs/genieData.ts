import { SynapseConfig } from 'types/portal-config'
import { genieDataSql } from '../resources'

const rgbIndex = 0

const genieData: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: genieDataSql,
    name: 'Files',
    showExportToCavatica: true,
    isRowSelectionVisible: true,
    rowSelectionPrimaryKey: ['id'],
    visibleColumnCount: 6,
    fileIdColumnName: 'id',
    fileNameColumnName: 'name',
    fileVersionColumnName: 'fileVersion',
    tableConfiguration: {
      showAccessColumn: true,
    },
    defaultShowPlots: false,
  },
}

export default genieData
