import gql from 'graphql-tag';
import { cellTypes } from '@bento-core/table';

// --------------- Table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  name: 'studies',
  display: true,
  dataKey: 'study_name',
  tableID: 'studies_table',
  // Table title
  title: 'C3DC Studies',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'studiesListing',
  // Value must be one of the 'field' in columns
  defaultSortField: 'phs_accession',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'phs_accession',
      header: 'Study Accession',
      tooltipText: 'Sort by Study Accession',
      cellType: cellTypes.LINK,
      linkAttr: {
        rootPath: '',
        pathParams: ['phs_accession']
      },
      display: true,
    },
    {
      dataField: 'study_short_title',
      header: 'Study Name',
      tooltipText: 'Sort by Study Name',
      display: true,
    },
    {
      dataField: 'num_participants',
      header: 'Participants Count',
      tooltipText: 'Sort by Participants Count',
      display: true,
    },
    {
      dataField: 'num_diseases',
      header: 'Diagnosis Count',
      tooltipText: 'Sort by Diagnosis Count',
      display: true,
    },
  ],
};

// --------------- GraphQL query - Retrieve program info --------------
const GET_STUDIES_DATA_QUERY = gql`{
  studiesListing  {
    phs_accession
    study_short_title
    num_participants
    num_diseases
  }
}
 `;

export {
  table,
  GET_STUDIES_DATA_QUERY,
};