export default () => ({
  inputRoot: {
    height: '26px',
    borderRadius: '8px',
    color: '#646464',
    fontFamily: 'Nunito',
    fontWeight: '500',
    fontSize: 9,
    '& fieldset': {
      borderWidth: '1px !important',
      borderColor: '#003F74 !important',
    },
  },
  clearAllButtonRoot: {
    margin: 'auto',
  },
  customButton: {
    borderRadius: '9px',
    maxWidth: '30px',
    maxHeight: '30px',
    minWidth: '30px',
    minHeight: '30px',
    marginTop: '0px',
    fontSize: 9,
    textTransform: 'none',
    color: '#3d4241',
    marginLeft: '0px',
    border: '1px solid #60797B',
    '&:hover': {
      backgroundColor: '#60797B',
      color: 'white',
    },
  },
  floatRight: {
    margin: '17px 11px 14px 20px',
  },
  resetText: {
    marginTop: '0px',
    marginLeft: '8px',
    color: '#60797B',
    fontSize: 14,
  },
  resetTextDisabled: {
    marginTop: '0px',
    marginLeft: '8px',
    color: '#AEBDBE',
    fontSize: 14,
  },
  cases: {
    height: '5px',
  },
  Cases: {
    height: '5px',
    margin: '0px',
    backgroundColor: '#0d8461',
  },
  Samples: {
    height: '5px',
    margin: '0px',
    backgroundColor: '#10beff',
  },
  Files: {
    height: '5px',
    margin: '0px',
    backgroundColor: '#e636e4',
  },
  sectionSummaryText: {
    fontSize: '16px',
    flexShrink: '0',
    fontFamily: 'Poppins',
    fontWeight: 400,
    lineHeight: '24px',
    marginLeft: '5px',
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
  },
  dropDownIconSubSection: {
    marginLeft: '0px',
    fill: '#000000',
  },
  customExpansionPanelSummaryRoot: {
    height: '42px',
    padding: '0',
    flexDirection: 'row-reverse',
    paddingLeft: 0,
    borderBottom: '1px solid #D2D2D2',
  },
  sortGroup: {
    padding: '10px',
  },
  sectionSummaryTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
    fontFamily: 'Poppins',
    fontSize: 18.5,
    fontWeight: 500,
    marginLeft: 3,
    color: '#000000',
    letterSpacing: '-0.02em',
  },
  CasesCheckbox: {
    color: '#10A075',
  },
  CasesCheckedIcon: {
    color: '#10A075',
  },
  checkboxRoot: {
    marginLeft: '5px',
    height: 12,
  },
  panelDetailText: {
    color: '#323232',
    fontFamily: 'Nunito',
    fontSize: '14px',
    fontWeight: '200',
  },
  panelSubjectText: {
    color: '#323232',
    fontFamily: 'Nunito',
    fontSize: '14px',
    marginRight: '0px',
  },
  activeFacetDemographics: {
    color: '#006A8F',
    fontWeight: 600,
  },
  activeFacetDiagnosis: {
    color: '#794900',
    fontWeight: 600,
  },
  activeFacetSurvival: {
    color: '#008566',
    fontWeight: 600,
  },
  activeFacetStudy: {
    color: '#6B2DA7',
    fontWeight: 600,
  },
  searchContainer: {
    paddingTop: '15px',
    margin: '0 2px',
    marginRight: 6,
  },
  findCaseButton: {
    // marginLeft: '105px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    height: 35,
    width: 37,
    border: '1px solid #435C60',
    cursor: 'pointer',
    borderRadius: 11,
    display: 'flex',
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  findCaseIcon: {
    width: 17,
    height: 17,
    fill: '#ff0000',
  },
  uploadButton: {
    boxSizing: 'border-box',
    fontWeight: '600',
    height: 24,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#435C60',
    color: '#fff',
    border: '1px solid #90A9B2',
    borderRadius: 10,
    fontFamily: 'Nunito',
    fontSize: 11,
    boxShadow: 'none',
    paddingLeft: 9,
    paddingRight: 12,
    '&:hover': {
      backgroundColor: '#435C60',
    },
  },
  iconSpan: {
    marginTop: '5.2px',
  },
  uploadIcon: {
    height: 19,
    width: 19,
  },
  customListPadding: {
    paddingTop: 8,
  },
  customDivider: {
    backgroundColor: '#B1B1B1',
    height: '2px',
    marginLeft: 0,
    marginRight: 0,
    // marginBottom: 6,
  },
  searchResultDetailText: {
    color: '#435C60',
    fontFamily: 'Nunito',
    fontSize: 11,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  paper: {
    border: '1.25px solid #003F74',
    backgroundColor: '#717171',
    color: '#fff',
    borderRadius: 10,
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: 500,
    boxShadow: '0 0 0 2px rgba(0, 63, 116, 0.36)',
    '& ::-webkit-scrollbar': {
      width: '0.6em',
      height: '1em',
    },
    '& ::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'none',
      borderRadius: '0px',
      backgroundColor: 'transparent',
    },
    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: '#000',
      borderRadius: '0px',
    },
  },
  listbox: {
    height: 223,
    paddingTop: '0px',
    '& li': {
      borderBottom: '1px solid #fff',
      '&:nth-last-child(1)': {
        borderBottom: 'none'
      }
    },
    '& :hover': {
      color: 'white',
      backgroundColor: '#003F74;'
    }
  },
});

export const uploadModalStyles = {
  modalTitle: {
    fontFamily: 'Poppins',
    borderBottom: '1px solid rgba(#000,0.3)',
    fontSize: 20,
    color: '#4D6787',
    padding: '16px 32px 12px 32px',
    margin: '0px',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '500',
  },
  textSection: {
    width: 315,
    border: 'none',
    backgroundColor: '#EFF2F6',
    margin: '20px 4px',
    padding: '10px 25px 13px 29px',
  },
  inputLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  listTitle: {
    fontWeight: 600,
    fontFamily: 'Poppins',
    color: '#004358',
    fontSize: 15,
    textTransform: 'uppercase',
    width: '240px',
  },
  helpIcon: {
    zIndex: '600',
    height: '13px',
    width: '13px',
  },
  textArea: {
    overflowY: 'auto !important',
    height: '151px !important',
    width: '100%',
    border: '1.5px solid #437BBE',
    borderRadius: 10,
    fontSize: 15,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#435C60',
    padding: '9px 13px',
    '&::placeholder': {
      fontSize: 14,
      fontFamily: 'Nunito',
      fontStyle: 'normal',
      color: '#8A8A8A',
      fontWeight: '400',
    },
  },
  orTitle: {
    position: 'fixed',
    color: '#437BBE',
    fontSize: 17,
    border: 'none',
    borderRadius: '50%',
    padding: '7px 8px 9px 8px',
    width: 42,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -36,
    backgroundColor: '#CCD4DD',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    marginTop: 5,
  },
  uploadFile: {
    width: 315,
    border: 'none',
    backgroundColor: '#EFF2F6',
    margin: '20px 4px',
    padding: 10,
    textAlign: 'center',
  },
  uploadButton: {
    width: 97,
    borderRadius: '5px',
    boxSizing: 'border-box',
    boxShadow: 'none',
    backgroundColor: '#437BBE',
    height: 41,
    border: 'none',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 12,
    marginBottom: '12px',
    textAlign: 'center',
    color: '#fff',
    position: 'absolute',
  },
  filesection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '51px',
  },
  fileNameContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    border: '1px solid #437BBE',
    borderRadius: '5px',
    paddingLeft: 10,
    paddingRight: 10,
    width: '260px',
    height: '32px',
    justifyContent: 'space-between',
    //vertically center the children
    position: 'relative',
  },
  fileName: {
    margin: 'unset',
    color: '#144784',
    fontSize: 15,
    fontFamily: 'Nunito',
    fontWeight: '500',
  },
  refresh: {
    color: '#415153',
    height: 15,
    width: 15,
    cursor: 'pointer',
    transform: 'scaleX(-1)',
  },
  horizontal: {
    display: 'none',
  },
  summary: {
    color: '#00316D',
    fontSize: 15,
    textAlign: 'center',
    margin: 0,
    paddingTop: 10,
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    color: '#004358',
    fontSize: '15px',
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    backgroundColor: '#EFF2F6',
    paddingTop: '13px',
    boxSizing: 'border-box',
    marginBottom: '0px',
    paddingBottom: '15px',
    },
  arrowRight: {
    color: '#000000',
    fontSize: '2.5rem',
    transform: 'rotate(90deg)',
    position: 'absolute',
    marginLeft: '-160px',
  },
  btnContainer: {
    backgroundColor: '#EFF2F6',
    paddingBottom: '14px',
    marginBottom: '-1px',
    paddingLeft: '10px',
  },
  submitBtn: {
    backgroundColor: '#0C534C',
    border: 'none',
    width: '97px',
    height: '41px',
    borderRadius: '5px',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '12px',
  },
  tableContainer: {
    border: 'none',
    width: '-webkit-fill-available',
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 16,
  },
  header: {
    fontSize: 12,
    color: '#437BBE',
    textAlign: 'center',
    fontFamily: 'lato',
    paddingBottom: 10,
    fontWeight: 100,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  heading: {
    fontSize: 12,
    color: '#437BBE',
    textAlign: 'center',
    fontFamily: 'lato',
    paddingBottom: 10,
    fontWeight: 100,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  tableColumn: {
    color: '#144784',
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '22px',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  clearBtn: {
    backgroundColor: '#2A6E93',
    border: 'none',
    width: '97px',
    height: '41px',
    borderRadius: '5px',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '12px',
  },
  cancelBtn: {
    backgroundColor: '#4F5D69',
    border: 'none',
    width: '97px',
    height: '41px',
    borderRadius: '5px',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '12px',
  },
};