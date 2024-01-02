/* eslint-disable */
import gql from 'graphql-tag';
import { cellTypes, cellStyles } from '@bento-core/table';
import { customParticipantsTabDownloadCSV, customFilesTabDownloadCSV, customSamplesTabDownloadCSV, customDiagnosisTabDownloadCSV, customStudyTabDownloadCSV } from './tableDownloadCSV';
import { dataFormatTypes } from '@bento-core/table';
import questionIcon from '../assets/icons/Question_Icon.svg';

// --------------- Tooltip configuration --------------
export const tooltipContentAddAll = {
  icon: questionIcon,
  alt: 'tooltipIcon',
  Participants: 'Click button to add all files associated with the filtered row(s).',
  Diagnosis: 'Click button to add all files associated with the filtered row(s).',
  Studies: 'Click button to add all files associated with the filtered row(s).',
  Samples: 'Click button to add all files associated with the filtered row(s).',
  Files: 'Click button to add all files associated with the filtered row(s).',
  arrow: true,
  styles: {
    border: '#03A383 1px solid',
  }
};

export const tooltipContent = {
  icon: questionIcon,
  alt: 'tooltipIcon',
  Participants: 'Click button to add files associated with the selected row(s).',
  Diagnosis: 'Click button to add files associated with the selected row(s).',
  Studies: 'Click button to add files associated with the selected row(s).',
  Samples: 'Click button to add files associated with the selected row(s).',
  Files: 'Click button to add files associated with the selected row(s).',
  arrow: true,
  styles: {
    border: '#03A383 1px solid',
  }
};

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};


// --------------- Tabs Header Data configuration --------------
export const tabs = [
  {
    id: 'participant_tab',
    title: 'Participants',
    dataField: 'dataParticipant',
    count: 'numberOfParticipants',
  },
  {
    id: 'diagnosis_tab',
    title: 'Diagnosis',
    dataField: 'dataDiagnosis',
    count: 'numberOfDiagnosis',
  },
  {
    id: 'study_tab',
    title: 'Studies',
    dataField: 'dataStudy',
    count: 'numberOfStudies',
  },
  {
    id: 'sample_tab',
    title: 'Samples',
    dataField: 'dataSample',
    count: 'numberOfSamples',
  },
  {
    id: 'file_tab',
    title: 'Files',
    dataField: 'dataFile',
    count: 'numberOfFiles',
  },
];

// --------------- Tabs Header Style configuration --------------
export const tabIndex = [
  {
    title: 'Participants',
    primaryColor: '#D6F2EA',
    secondaryColor: '#FFDFB8',
    selectedColor: '#10A075',
  },
  {
    title: 'Samples',
    primaryColor: '#CFEDF9',
    secondaryColor: '#C9F1F1',
    selectedColor: '#0DAFEC',
  },
  {
    title: 'Files',
    primaryColor: '#F7D7F7',
    secondaryColor: '#86D6F0',
    selectedColor: '#C92EC7',
  },
  {
    title: 'Diagnosis',
    primaryColor: '#F7D7F7',
    secondaryColor: '#86D6F0',
    selectedColor: '#C92EC7',
  },
  {
    title: 'Studies',
    primaryColor: '#F7D7F7',
    secondaryColor: '#86D6F0',
    selectedColor: '#C92EC7',
  },
];
//NOTE: Change 'getParticipants' to 'searchParticipants' in the backend.
export const DASHBOARD_QUERY_NEW = gql`query search(
  # Demographics
  $participant_ids: [String],
  $ethnicity: [String],
  $race: [String],
  $sex_at_birth: [String],

  # Diagnoses
  $age_at_diagnosis: [Int],
  $anatomic_site: [String],
  $diagnosis_classification: [String],
  $diagnosis_classification_system: [String],
  $diagnosis_verification_status: [String],
  $diagnosis_basis: [String],
  $disease_phase: [String],

  # Studies
  $phs_accession: [String],
  $study_acronym: [String],
  $study_short_title: [String],

  # Survivals
  $age_at_last_known_survival_status: [Int],
  $first_event: [String],
  $last_known_survival_status: [String]
) {
getParticipants(
  # Demographics
  participant_ids: $participant_ids,
  ethnicity: $ethnicity,
  race: $race,
  sex_at_birth: $sex_at_birth,

  # Diagnoses
  age_at_diagnosis: $age_at_diagnosis,
  anatomic_site: $anatomic_site,
  diagnosis_classification: $diagnosis_classification,
  diagnosis_classification_system: $diagnosis_classification_system,
  diagnosis_verification_status: $diagnosis_verification_status,
  diagnosis_basis: $diagnosis_basis,
  disease_phase: $disease_phase,
  
  # Studies
  phs_accession: $phs_accession,
  study_acronym: $study_acronym,
  study_short_title: $study_short_title,

  # Survivals
  age_at_last_known_survival_status: $age_at_last_known_survival_status,
  first_event: $first_event,
  last_known_survival_status: $last_known_survival_status
) {
  numberOfParticipants
  numberOfDiagnoses
  numberOfStudies

  # Widget counts
  participantCountByEthnicity {
    group
    subjects
    __typename
  }
  participantCountByRace {
    group
    subjects
    __typename
  }
  participantCountBySexAtBirth {
    group
    subjects
    __typename
  }
  participantCountByAgeAtLastKnownSurvivalStatus {
    group
    subjects
    __typename
  }
  participantCountByFirstEvent {
    group
    subjects
    __typename
  }
  participantCountByLastKnownSurvivalStatus {
    group
    subjects
    __typename
  }

  # Demographic filter counts
  filterParticipantCountByEthnicity {
    group
    subjects
    __typename
  }
  filterParticipantCountByRace {
    group
    subjects
    __typename
  }
  filterParticipantCountBySexAtBirth {
    group
    subjects
    __typename
  }

  # Diagnosis filter counts
  filterParticipantCountByAgeAtDiagnosis {
    lowerBound
    upperBound
    subjects
    __typename
  }
  filterParticipantCountByAnatomicSite {
    group
    subjects
    __typename
  }
  filterParticipantCountByDiagnosisClassification {
    group
    subjects
    __typename
  }
  filterParticipantCountByDiagnosisClassificationSystem {
    group
    subjects
    __typename
  }
  filterParticipantCountByDiagnosisVerificationStatus {
    group
    subjects
    __typename
  }
  filterParticipantCountByDiagnosisBasis {
    group
    subjects
    __typename
  }
  filterParticipantCountByDiseasePhase {
    group
    subjects
    __typename
  }

  # Study filter counts
  filterParticipantCountByPhsAccession {
    group
    subjects
    __typename
  }
  filterParticipantCountByStudyAcronym {
    group
    subjects
    __typename
  }
  filterParticipantCountByStudyShortTitle {
    group
    subjects
    __typename
  }

  # Survival filter counts
  filterParticipantCountByAgeAtLastKnownSurvivalStatus {
    lowerBound
    upperBound
    subjects
    __typename
  }
  filterParticipantCountByFirstEvent {
    group
    subjects
    __typename
  }
  filterParticipantCountByLastKnownSurvivalStatus {
    group
    subjects
    __typename
  }
  __typename
}
}

`;

export const GET_FILES_OVERVIEW_QUERY = gql`
query fileOverview(
    $participant_ids: [String],
    $gender: [String] ,
    $race: [String] ,
    $ethnicity: [String] ,
    $age_at_diagnosis: [Int] ,
    $diagnosis_anatomic_site: [String] ,
    $disease_phase: [String] ,
    $diagnosis_icd_o: [String] ,
    $vital_status: [String] ,
    $sample_anatomic_site: [String] ,
    $participant_age_at_collection: [Int] ,
    $sample_tumor_status: [String] ,
    $tumor_classification: [String] ,
    $assay_method: [String],
    $file_type: [String],
    $phs_accession: [String],
    $grant_id: [String],
    $institution: [String],
    $study_acronym: [String],
    $study_short_title: [String],
    $library_selection: [String],
    $library_source: [String],
    $library_strategy: [String],
    $first: Int, 
    $offset: Int, 
    $order_by: String,
    $sort_direction: String ){
    fileOverview(
        participant_ids: $participant_ids,
        gender: $gender,
        race: $race,
        ethnicity: $ethnicity,
        age_at_diagnosis: $age_at_diagnosis,
        diagnosis_anatomic_site: $diagnosis_anatomic_site,
        disease_phase: $disease_phase,
        diagnosis_icd_o: $diagnosis_icd_o,
        vital_status: $vital_status,
        sample_anatomic_site: $sample_anatomic_site,
        participant_age_at_collection: $participant_age_at_collection,
        sample_tumor_status: $sample_tumor_status,
        tumor_classification: $tumor_classification,
        assay_method: $assay_method,
        file_type: $file_type,
        phs_accession: $phs_accession,       
        grant_id: $grant_id,
        institution: $institution,
        study_acronym: $study_acronym,
        study_short_title: $study_short_title,
        library_selection: $library_selection,
        library_source: $library_source,
        library_strategy: $library_strategy,
        first: $first, 
        offset: $offset, 
        order_by: $order_by,
        sort_direction: $sort_direction
    ){
        id
        file_name
        file_category
        file_description
        file_type
        file_size
        study_id
        participant_id
        sample_id
        file_id
        guid
        md5sum
    }
}
`;

export const GET_SAMPLES_OVERVIEW_QUERY = gql`
query sampleOverview(
    $participant_ids: [String],
    $gender: [String] ,
    $race: [String] ,
    $ethnicity: [String] ,
    $age_at_diagnosis: [Int] ,
    $diagnosis_anatomic_site: [String] ,
    $disease_phase: [String] ,
    $diagnosis_icd_o: [String] ,
    $vital_status: [String] ,
    $sample_anatomic_site: [String] ,
    $participant_age_at_collection: [Int] ,
    $sample_tumor_status: [String] ,
    $tumor_classification: [String] ,
    $assay_method: [String],
    $file_type: [String],
    $phs_accession: [String],
    $grant_id: [String],
    $institution: [String],
    $study_acronym: [String],
    $study_short_title: [String],
    $library_selection: [String],
    $library_source: [String],
    $library_strategy: [String],
    $first: Int, 
    $offset: Int, 
    $order_by: String,
    $sort_direction: String ){
    sampleOverview(
        participant_ids: $participant_ids,
        gender: $gender,
        race: $race,
        ethnicity: $ethnicity,
        age_at_diagnosis: $age_at_diagnosis,
        diagnosis_anatomic_site: $diagnosis_anatomic_site,
        disease_phase: $disease_phase,
        diagnosis_icd_o: $diagnosis_icd_o,
        vital_status: $vital_status,
        sample_anatomic_site: $sample_anatomic_site,
        participant_age_at_collection: $participant_age_at_collection,
        sample_tumor_status: $sample_tumor_status,
        tumor_classification: $tumor_classification,
        assay_method: $assay_method,
        file_type: $file_type,
        phs_accession: $phs_accession,       
        grant_id: $grant_id,
        institution: $institution,
        study_acronym: $study_acronym,
        study_short_title: $study_short_title,
        library_selection: $library_selection,
        library_source: $library_source,
        library_strategy: $library_strategy,
        first: $first, 
        offset: $offset, 
        order_by: $order_by,
        sort_direction: $sort_direction
    ){
        id
        sample_id
        participant_id
        study_id
        anatomic_site
        participant_age_at_collection
        diagnosis_icd_o
        sample_tumor_status
        tumor_classification
    }
}
`;

export const GET_PARTICIPANTS_OVERVIEW_QUERY = gql`
query participantOverview(
    $participant_ids: [String],
    $gender: [String] ,
    $race: [String] ,
    $ethnicity: [String] ,
    $age_at_diagnosis: [Int] ,
    $diagnosis_anatomic_site: [String] ,
    $disease_phase: [String] ,
    $diagnosis_icd_o: [String] ,
    $vital_status: [String] ,
    $sample_anatomic_site: [String] ,
    $participant_age_at_collection: [Int] ,
    $sample_tumor_status: [String] ,
    $tumor_classification: [String] ,
    $assay_method: [String],
    $file_type: [String],
    $phs_accession: [String],
    $grant_id: [String],
    $institution: [String],
    $study_acronym: [String],
    $study_short_title: [String],
    $library_selection: [String],
    $library_source: [String],
    $library_strategy: [String],
    $first: Int, 
    $offset: Int, 
    $order_by: String,
    $sort_direction: String ){
    participantOverview(
        participant_ids: $participant_ids,
        gender: $gender,
        race: $race,
        ethnicity: $ethnicity,
        age_at_diagnosis: $age_at_diagnosis,
        diagnosis_anatomic_site: $diagnosis_anatomic_site,
        disease_phase: $disease_phase,
        diagnosis_icd_o: $diagnosis_icd_o,
        vital_status: $vital_status,
        sample_anatomic_site: $sample_anatomic_site,
        participant_age_at_collection: $participant_age_at_collection,
        sample_tumor_status: $sample_tumor_status,
        tumor_classification: $tumor_classification,
        assay_method: $assay_method,
        file_type: $file_type,
        phs_accession: $phs_accession,       
        grant_id: $grant_id,
        institution: $institution,
        study_acronym: $study_acronym,
        study_short_title: $study_short_title,
        library_selection: $library_selection,
        library_source: $library_source,
        library_strategy: $library_strategy,
        first: $first, 
        offset: $offset, 
        order_by: $order_by,
        sort_direction: $sort_direction
    ) {
        id
        participant_id
        phs_accession
        study_id
        race
        gender
        ethnicity
        alternate_participant_id
    }
}
`;

export const GET_DIAGNOSIS_OVERVIEW_QUERY = gql`
query diagnosisOverview(
    $participant_ids: [String],
    $gender: [String] ,
    $race: [String] ,
    $ethnicity: [String] ,
    $age_at_diagnosis: [Int] ,
    $diagnosis_anatomic_site: [String] ,
    $disease_phase: [String] ,
    $diagnosis_icd_o: [String] ,
    $vital_status: [String] ,
    $sample_anatomic_site: [String] ,
    $participant_age_at_collection: [Int] ,
    $sample_tumor_status: [String] ,
    $tumor_classification: [String] ,
    $assay_method: [String],
    $file_type: [String],
    $phs_accession: [String],
    $grant_id: [String],
    $institution: [String],
    $study_acronym: [String],
    $study_short_title: [String],
    $library_selection: [String],
    $library_source: [String],
    $library_strategy: [String],
    $first: Int, 
    $offset: Int, 
    $order_by: String,
    $sort_direction: String ){
      diagnosisOverview(
        participant_ids: $participant_ids,
        gender: $gender,
        race: $race,
        ethnicity: $ethnicity,
        age_at_diagnosis: $age_at_diagnosis,
        diagnosis_anatomic_site: $diagnosis_anatomic_site,
        disease_phase: $disease_phase,
        diagnosis_icd_o: $diagnosis_icd_o,
        vital_status: $vital_status,
        sample_anatomic_site: $sample_anatomic_site,
        participant_age_at_collection: $participant_age_at_collection,
        sample_tumor_status: $sample_tumor_status,
        tumor_classification: $tumor_classification,
        assay_method: $assay_method,
        file_type: $file_type,
        phs_accession: $phs_accession,       
        grant_id: $grant_id,
        institution: $institution,
        study_acronym: $study_acronym,
        study_short_title: $study_short_title,
        library_selection: $library_selection,
        library_source: $library_source,
        library_strategy: $library_strategy,
        first: $first, 
        offset: $offset, 
        order_by: $order_by,
        sort_direction: $sort_direction
    ) {
        id
        diagnosis_id
        participant_id
        phs_accession
        diagnosis_icd_o
        disease_phase
        anatomic_site
        age_at_diagnosis
        vital_status
        study_id
    }
}
`;

export const GET_STUDY_OVERVIEW_QUERY = gql`
query studyOverview(
    $participant_ids: [String],
    $gender: [String] ,
    $race: [String] ,
    $ethnicity: [String] ,
    $age_at_diagnosis: [Int] ,
    $diagnosis_anatomic_site: [String] ,
    $disease_phase: [String] ,
    $diagnosis_icd_o: [String] ,
    $vital_status: [String] ,
    $sample_anatomic_site: [String] ,
    $participant_age_at_collection: [Int] ,
    $sample_tumor_status: [String] ,
    $tumor_classification: [String] ,
    $assay_method: [String],
    $file_type: [String],
    $phs_accession: [String],
    $grant_id: [String],
    $institution: [String],
    $study_acronym: [String],
    $study_short_title: [String],
    $library_selection: [String],
    $library_source: [String],
    $library_strategy: [String],
    $first: Int, 
    $offset: Int, 
    $order_by: String,
    $sort_direction: String ){
    studyOverview(
        participant_ids: $participant_ids,
        gender: $gender,
        race: $race,
        ethnicity: $ethnicity,
        age_at_diagnosis: $age_at_diagnosis,
        diagnosis_anatomic_site: $diagnosis_anatomic_site,
        disease_phase: $disease_phase,
        diagnosis_icd_o: $diagnosis_icd_o,
        vital_status: $vital_status,
        sample_anatomic_site: $sample_anatomic_site,
        participant_age_at_collection: $participant_age_at_collection,
        sample_tumor_status: $sample_tumor_status,
        tumor_classification: $tumor_classification,
        assay_method: $assay_method,
        file_type: $file_type,
        phs_accession: $phs_accession,       
        grant_id: $grant_id,
        institution: $institution,
        study_acronym: $study_acronym,
        study_short_title: $study_short_title,
        library_selection: $library_selection,
        library_source: $library_source,
        library_strategy: $library_strategy,
        first: $first, 
        offset: $offset, 
        order_by: $order_by,
        sort_direction: $sort_direction
    ) {
        id
        study_id
        pubmed_id
        grant_id
        phs_accession
        study_short_title
        personnel_name
        diagnosis
        anatomic_site
        num_of_participants
        num_of_samples
        num_of_files
        file_type
    }
}
`;

export const GET_ALL_FILEIDS_PARTICIPANTSTAB_FOR_SELECT_ALL = gql`
query search (          
  $participant_ids: [String],
){
  fileIDsFromList (          
      participant_ids: $participant_ids,
  ) 
}
  `;

export const GET_ALL_FILEIDS_SAMPLESTAB_FOR_SELECT_ALL = gql`
query search (          
  $sample_ids: [String],
){
  fileIDsFromList (          
    sample_ids: $sample_ids,
  ) 
}
  `;

export const GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL = gql`
query search (          
  $file_ids: [String] 
){
  fileIDsFromList (          
      file_ids: $file_ids
  ) 
}
  `;

export const GET_ALL_FILEIDS_DIAGNOSISTAB_FOR_SELECT_ALL = gql`
query search (          
  $diagnosis_ids: [String] 
){
  fileIDsFromList (          
      diagnosis_ids: $diagnosis_ids
  ) 
}
  `;
export const GET_ALL_FILEIDS_STUDYISTAB_FOR_SELECT_ALL = gql`
query search (          
  $study_ids: [String] 
){
  fileIDsFromList (          
      study_ids: $study_ids
  ) 
}
  `;

export const GET_ALL_FILEIDS_FROM_PARTICIPANTSTAB_FOR_ADD_ALL_CART = gql`
query participantsAddAllToCart(
    $participant_ids: [String],
    $gender: [String] ,
    $race: [String] ,
    $ethnicity: [String] ,
    $age_at_diagnosis: [Int] ,
    $diagnosis_anatomic_site: [String] ,
    $disease_phase: [String] ,
    $diagnosis_icd_o: [String] ,
    $vital_status: [String] ,
    $sample_anatomic_site: [String] ,
    $participant_age_at_collection: [Int] ,
    $sample_tumor_status: [String] ,
    $tumor_classification: [String] ,
    $assay_method: [String],
    $file_type: [String],
    $phs_accession: [String],
    $grant_id: [String],
    $institution: [String],
    $study_acronym: [String],
    $study_short_title: [String],
    $library_selection: [String],
    $library_source: [String],
    $library_strategy: [String],
    $first: Int,
    $offset: Int= 0, 
    $order_by: String = "file_id",
    $sort_direction: String = "asc" 
  ){
    participantOverview(
      participant_ids: $participant_ids,
      gender: $gender,
      race: $race,
      ethnicity: $ethnicity,
      age_at_diagnosis: $age_at_diagnosis,
      diagnosis_anatomic_site: $diagnosis_anatomic_site,
      disease_phase: $disease_phase,
      diagnosis_icd_o: $diagnosis_icd_o,
      vital_status: $vital_status,
      sample_anatomic_site: $sample_anatomic_site,
      participant_age_at_collection: $participant_age_at_collection,
      sample_tumor_status: $sample_tumor_status,
      tumor_classification: $tumor_classification,
      assay_method: $assay_method,
      file_type: $file_type,
      phs_accession: $phs_accession,       
      grant_id: $grant_id,
      institution: $institution,
      study_acronym: $study_acronym,
      study_short_title: $study_short_title,
      library_selection: $library_selection,
      library_source: $library_source,
      library_strategy: $library_strategy,
      first: $first,
      offset: $offset,
      order_by: $order_by,
      sort_direction: $sort_direction
      ) {
      files
  }
}
    `;

export const GET_ALL_FILEIDS_FROM_SAMPLETAB_FOR_ADD_ALL_CART = gql`
    query samplesAddAllToCart(
      $participant_ids: [String],
      $gender: [String] ,
      $race: [String] ,
      $ethnicity: [String] ,
      $age_at_diagnosis: [Int] ,
      $diagnosis_anatomic_site: [String] ,
      $disease_phase: [String] ,
      $diagnosis_icd_o: [String] ,
      $vital_status: [String] ,
      $sample_anatomic_site: [String] ,
      $participant_age_at_collection: [Int] ,
      $sample_tumor_status: [String] ,
      $tumor_classification: [String] ,
      $assay_method: [String],
      $file_type: [String],
      $phs_accession: [String],
      $grant_id: [String],
      $institution: [String],
      $study_acronym: [String],
      $study_short_title: [String],
      $library_selection: [String],
      $library_source: [String],
      $library_strategy: [String],
      $first: Int,
      $offset: Int= 0, 
      $order_by: String = "file_id",
      $sort_direction: String = "asc" ){
      sampleOverview(
          participant_ids: $participant_ids,
          gender: $gender,
          race: $race,
          ethnicity: $ethnicity,
          age_at_diagnosis: $age_at_diagnosis,
          diagnosis_anatomic_site: $diagnosis_anatomic_site,
          disease_phase: $disease_phase,
          diagnosis_icd_o: $diagnosis_icd_o,
          vital_status: $vital_status,
          sample_anatomic_site: $sample_anatomic_site,
          participant_age_at_collection: $participant_age_at_collection,
          sample_tumor_status: $sample_tumor_status,
          tumor_classification: $tumor_classification,
          assay_method: $assay_method,
          file_type: $file_type,
          phs_accession: $phs_accession,       
          grant_id: $grant_id,
          institution: $institution,
          study_acronym: $study_acronym,
          study_short_title: $study_short_title,
          library_selection: $library_selection,
          library_source: $library_source,
          library_strategy: $library_strategy,
          first: $first,
          offset: $offset,
          order_by: $order_by,
          sort_direction: $sort_direction
          ) {
          files
      }
    }
        `;

export const GET_ALL_FILEIDS_FROM_FILESTAB_FOR_ADD_ALL_CART = gql`
query fileAddAllToCart(
  $participant_ids: [String],
  $gender: [String] ,
  $race: [String] ,
  $ethnicity: [String] ,
  $age_at_diagnosis: [Int] ,
  $diagnosis_anatomic_site: [String] ,
  $disease_phase: [String] ,
  $diagnosis_icd_o: [String] ,
  $vital_status: [String] ,
  $sample_anatomic_site: [String] ,
  $participant_age_at_collection: [Int] ,
  $sample_tumor_status: [String] ,
  $tumor_classification: [String] ,
  $assay_method: [String],
  $file_type: [String],
  $phs_accession: [String],
  $grant_id: [String],
  $institution: [String],
  $study_acronym: [String],
  $study_short_title: [String],
  $library_selection: [String],
  $library_source: [String],
  $library_strategy: [String],
  $first: Int,
  $offset: Int= 0, 
  $order_by: String = "file_id",
  $sort_direction: String = "asc"
 ){
  fileOverview(
      participant_ids: $participant_ids,
      gender: $gender,
      race: $race,
      ethnicity: $ethnicity,
      age_at_diagnosis: $age_at_diagnosis,
      diagnosis_anatomic_site: $diagnosis_anatomic_site,
      disease_phase: $disease_phase,
      diagnosis_icd_o: $diagnosis_icd_o,
      vital_status: $vital_status,
      sample_anatomic_site: $sample_anatomic_site,
      participant_age_at_collection: $participant_age_at_collection,
      sample_tumor_status: $sample_tumor_status,
      tumor_classification: $tumor_classification,
      assay_method: $assay_method,
      file_type: $file_type,
      phs_accession: $phs_accession,       
      grant_id: $grant_id,
      institution: $institution,
      study_acronym: $study_acronym,
      study_short_title: $study_short_title,
      library_selection: $library_selection,
      library_source: $library_source,
      library_strategy: $library_strategy,
      first: $first,
      offset: $offset,
      order_by: $order_by,
      sort_direction: $sort_direction
  ){
    files
  }
}
            `;

export const GET_ALL_FILEIDS_FROM_DIAGNOSISTAB_FOR_ADD_ALL_CART = gql`
query diagnosisAddAllToCart(
  $participant_ids: [String],
  $gender: [String] ,
  $race: [String] ,
  $ethnicity: [String] ,
  $age_at_diagnosis: [Int] ,
  $diagnosis_anatomic_site: [String] ,
  $disease_phase: [String] ,
  $diagnosis_icd_o: [String] ,
  $vital_status: [String] ,
  $sample_anatomic_site: [String] ,
  $participant_age_at_collection: [Int] ,
  $sample_tumor_status: [String] ,
  $tumor_classification: [String] ,
  $assay_method: [String],
  $file_type: [String],
  $phs_accession: [String],
  $grant_id: [String],
  $institution: [String],
  $study_acronym: [String],
  $study_short_title: [String],
  $library_selection: [String],
  $library_source: [String],
  $library_strategy: [String],
  $first: Int,
  $offset: Int= 0, 
  $order_by: String = "file_id",
  $sort_direction: String = "asc" ){
  diagnosisOverview(
      participant_ids: $participant_ids,
      gender: $gender,
      race: $race,
      ethnicity: $ethnicity,
      age_at_diagnosis: $age_at_diagnosis,
      diagnosis_anatomic_site: $diagnosis_anatomic_site,
      disease_phase: $disease_phase,
      diagnosis_icd_o: $diagnosis_icd_o,
      vital_status: $vital_status,
      sample_anatomic_site: $sample_anatomic_site,
      participant_age_at_collection: $participant_age_at_collection,
      sample_tumor_status: $sample_tumor_status,
      tumor_classification: $tumor_classification,
      assay_method: $assay_method,
      file_type: $file_type,
      phs_accession: $phs_accession,       
      grant_id: $grant_id,
      institution: $institution,
      study_acronym: $study_acronym,
      study_short_title: $study_short_title,
      library_selection: $library_selection,
      library_source: $library_source,
      library_strategy: $library_strategy,
      first: $first,
      offset: $offset,
      order_by: $order_by,
      sort_direction: $sort_direction
      ) {
      files
  }
}
    `;

export const GET_ALL_FILEIDS_FROM_STUDYTAB_FOR_ADD_ALL_CART = gql`
query studyAddAllToCart(
  $participant_ids: [String],
  $gender: [String] ,
  $race: [String] ,
  $ethnicity: [String] ,
  $age_at_diagnosis: [Int] ,
  $diagnosis_anatomic_site: [String] ,
  $disease_phase: [String] ,
  $diagnosis_icd_o: [String] ,
  $vital_status: [String] ,
  $sample_anatomic_site: [String] ,
  $participant_age_at_collection: [Int] ,
  $sample_tumor_status: [String] ,
  $tumor_classification: [String] ,
  $assay_method: [String],
  $file_type: [String],
  $phs_accession: [String],
  $grant_id: [String],
  $institution: [String],
  $study_acronym: [String],
  $study_short_title: [String],
  $library_selection: [String],
  $library_source: [String],
  $library_strategy: [String],
  $first: Int,
  $offset: Int= 0, 
  $order_by: String = "file_id",
  $sort_direction: String = "asc" ){
  studyOverview(
      participant_ids: $participant_ids,
      gender: $gender,
      race: $race,
      ethnicity: $ethnicity,
      age_at_diagnosis: $age_at_diagnosis,
      diagnosis_anatomic_site: $diagnosis_anatomic_site,
      disease_phase: $disease_phase,
      diagnosis_icd_o: $diagnosis_icd_o,
      vital_status: $vital_status,
      sample_anatomic_site: $sample_anatomic_site,
      participant_age_at_collection: $participant_age_at_collection,
      sample_tumor_status: $sample_tumor_status,
      tumor_classification: $tumor_classification,
      assay_method: $assay_method,
      file_type: $file_type,
      phs_accession: $phs_accession,       
      grant_id: $grant_id,
      institution: $institution,
      study_acronym: $study_acronym,
      study_short_title: $study_short_title,
      library_selection: $library_selection,
      library_source: $library_source,
      library_strategy: $library_strategy,
      first: $first,
      offset: $offset,
      order_by: $order_by,
      sort_direction: $sort_direction
      ) {
      files
  }
}
    `;

// --------------- GraphQL query - Retrieve files tab details --------------
export const GET_FILES_NAME_QUERY = gql`
query fileOverview($file_ids: [String], $offset: Int = 0, $first: Int = 100000, $order_by:String ="file_name"){
  fileOverview(file_ids: $file_ids, offset: $offset,first: $first, order_by: $order_by) {
    file_name
  }
}
  `;

export const GET_FILE_IDS_FROM_FILE_NAME = gql`
  query (
      $file_name: [String],
      $offset: Int,
      $first: Int,
      $order_by: String
  )
  {
      fileIdsFromFileNameDesc(
          file_name:$file_name, 
          offset:$offset,
          first:$first,
          order_by:$order_by
      )
      {
          file_id
      }
  }`;

// --------------- Tabs Table configuration --------------
export const tabContainers = [
  {
    name: 'Participants',
    dataField: 'dataParticipant',
    api: GET_PARTICIPANTS_OVERVIEW_QUERY,
    paginationAPIField: 'participantOverview',
    count: 'numberOfParticipants',
    fileCount: 'participantsFileCount',
    dataKey: 'id',
    defaultSortField: 'participant_id',
    defaultSortDirection: 'asc',
    buttonText: 'Add Selected Files',
    tableID: 'participant_tab_table',
    extendedViewConfig: {
      pagination: true,
      manageViewColumns: false,
    },
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        display: true,
        role: cellTypes.CHECKBOX,
      },
      // {
      //   dataField: 'participant_id',
      //   header: 'Participant ID',
      //   cellType: cellTypes.LINK,
      //   linkAttr : {
      //     rootPath: '/participant',
      //     pathParams: ['participant_id'],
      //   },
      //   display: true,
      //   tooltipText: 'sort',
      // },
      {
        dataField: 'participant_id',
        header: 'Participant ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'study_id',
        header: 'Study ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'gender',
        header: 'Gender',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'race',
        header: 'Race',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'ethnicity',
        header: 'Ethnicity',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'alternate_participant_id',
        header: 'Alternate ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
    id: 'participant_tab',
    tableID: 'participant_tab_table',
    tableDownloadCSV: customParticipantsTabDownloadCSV,
    tabIndex: '0',
    downloadFileName: 'CCDI Inventory Participants Download',
    tableMsg: {
      noMatch: 'No Matching Records Found',
    },
    addFilesRequestVariableKey: 'participant_ids',
    addFilesResponseKeys: ['fileIDsFromList'],
    addAllFilesResponseKeys: ['participantOverview', 'files'],
    addAllFileQuery: GET_ALL_FILEIDS_FROM_PARTICIPANTSTAB_FOR_ADD_ALL_CART,
    addSelectedFilesQuery: GET_ALL_FILEIDS_PARTICIPANTSTAB_FOR_SELECT_ALL,
  },
  {
    name: 'Diagnosis',
    dataField: 'dataDiagnosis',
    api: GET_DIAGNOSIS_OVERVIEW_QUERY,
    paginationAPIField: 'diagnosisOverview',
    defaultSortField: 'participant_id',
    defaultSortDirection: 'asc',
    count: 'numberOfDiagnosis',
    fileCount: 'diagnosisFileCount',
    dataKey: 'id',
    tableID: 'diagnosis_tab_table',
    extendedViewConfig: {
      pagination: true,
      manageViewColumns: false,
    },
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        display: true,
        role: cellTypes.CHECKBOX,
      },
      {
        dataField: 'participant_id',
        header: 'Participant ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'study_id',
        header: 'Study ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'diagnosis_icd_o',
        header: 'Diagnosis (ICD-O)',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'disease_phase',
        header: 'Disease Phase',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'anatomic_site',
        header: 'Anatomic Site',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'age_at_diagnosis',
        header: 'Age at Diagnosis (days)',
        display: true,
        tooltipText: 'sort',
        cellType: cellTypes.CUSTOM_ELEM,
        cellStyle: cellStyles.TRANSFORM,
        dataFormatter: (dt) => {
          if (dt === -999) {
            return 'Not Reported';
          }
          return dt.toString();
        },
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'vital_status',
        header: 'Vital Status',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
    id: 'diagnosis_tab',
    tableID: 'diagnosis_tab_table',
    tabIndex: '3',
    selectableRows: true,
    tableDownloadCSV: customDiagnosisTabDownloadCSV,
    downloadFileName: 'CCDI Inventory Diagnosis Download',
    tableMsg: {
      noMatch: 'No Matching Records Found',
    },
    addFilesRequestVariableKey: 'diagnosis_ids',
    addFilesResponseKeys: ['fileIDsFromList'],
    addAllFilesResponseKeys: ['diagnosisOverview', 'files'],
    addAllFileQuery: GET_ALL_FILEIDS_FROM_DIAGNOSISTAB_FOR_ADD_ALL_CART,
    addSelectedFilesQuery: GET_ALL_FILEIDS_DIAGNOSISTAB_FOR_SELECT_ALL,
  },
  {
    name: 'Studies',
    dataField: 'dataStudy',
    api: GET_STUDY_OVERVIEW_QUERY,
    paginationAPIField: 'studyOverview',
    defaultSortField: 'study_short_title',
    defaultSortDirection: 'asc',
    count: 'numberOfStudies',
    fileCount: 'studiesFileCount',
    dataKey: 'id',
    tableID: 'study_tab_table',
    extendedViewConfig: {
      pagination: true,
      manageViewColumns: false,
    },
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        display: true,
        role: cellTypes.CHECKBOX,
      },
      {
        dataField: 'study_short_title',
        header: 'Study Short Title',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'study_id',
        header: 'Study ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'diagnosis',
        header: 'Diagnosis (Top 5)',
        downloadHeader: 'Diagnosis',
        display: true,
        sortable: false,
        headerType: cellTypes.CUSTOM_ELEM,
        cellType: cellTypes.CUSTOM_ELEM,
        cellStyle: cellStyles.EXPAND,
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'anatomic_site',
        header: 'Diagnosis Anatomic Site (Top 5)',
        downloadHeader: 'Diagnosis Anatomic Site',
        display: true,
        sortable: false,
        cellType: cellTypes.CUSTOM_ELEM,
        cellStyle: cellStyles.EXPAND,
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'num_of_participants',
        header: 'Number of Participants',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'num_of_samples',
        header: 'Number of Samples',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'num_of_files',
        header: 'Number of Files',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_type',
        header: 'File Type (Top 5)',
        downloadHeader: 'File Type',
        display: true,
        sortable: false,
        cellType: cellTypes.CUSTOM_ELEM,
        cellStyle: cellStyles.EXPAND,
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'pubmed_id',
        header: 'PubMed ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'personnel_name',
        header: 'Principal Investigator(s)',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'grant_id',
        header: 'Grant ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
    id: 'study_tab',
    tableID: 'study_tab_table',
    tabIndex: '4',
    selectableRows: true,
    tableDownloadCSV: customStudyTabDownloadCSV,
    downloadFileName: 'CCDI Inventory Studies Download',
    tableMsg: {
      noMatch: 'No Matching Records Found',
    },
    addFilesRequestVariableKey: 'study_ids',
    addFilesResponseKeys: ['fileIDsFromList'],
    addAllFilesResponseKeys: ['studyOverview', 'files'],
    addAllFileQuery: GET_ALL_FILEIDS_FROM_STUDYTAB_FOR_ADD_ALL_CART,
    addSelectedFilesQuery: GET_ALL_FILEIDS_STUDYISTAB_FOR_SELECT_ALL,
  },
  {
    name: 'Samples',
    dataField: 'dataSample',
    api: GET_SAMPLES_OVERVIEW_QUERY,
    count: 'numberOfSamples',
    fileCount: 'samplesFileCount',
    paginationAPIField: 'sampleOverview',
    dataKey: 'id',
    defaultSortField: 'sample_id',
    defaultSortDirection: 'asc',
    tableID: 'sample_tab_table',
    extendedViewConfig: {
      pagination: true,
      manageViewColumns: false,
    },
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#00AEEF',
      opacity: '1',
      border: '0px',
      cursor: 'pointer',
    },
    DeactiveSaveButtonDefaultStyle: {
      opacity: '0.3',
      cursor: 'auto',
    },
    ActiveSaveButtonDefaultStyle: {
      cursor: 'pointer',
      opacity: 'unset',
      border: 'unset',
    },

    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        display: true,
        role: cellTypes.CHECKBOX,
      },
      {
        dataField: 'sample_id',
        header: 'Sample ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'participant_id',
        header: 'Participant ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'study_id',
        header: 'Study ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'anatomic_site',
        header: 'Anatomic Site',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'participant_age_at_collection',
        header: 'Age at Sample Collection',
        display: true,
        tooltipText: 'sort',
        cellType: cellTypes.CUSTOM_ELEM,
        cellStyle: cellStyles.TRANSFORM,
        dataFormatter: (dt) => {
          if (dt === -999) {
            return 'Not Reported';
          }
          return dt.toString();
        },
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'diagnosis_icd_o',
        header: 'Sample ICD-O Morphology',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'sample_tumor_status',
        header: 'Sample Tumor Status',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'tumor_classification',
        header: 'Sample Tumor Classification',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
    id: 'sample_tab',
    tableID: 'sample_tab_table',
    tabIndex: '1',
    tableDownloadCSV: customSamplesTabDownloadCSV,
    downloadFileName: 'CCDI Inventory Samples Download',
    tableMsg: {
      noMatch: 'No Matching Records Found',
    },
    addFilesRequestVariableKey: 'sample_ids',
    addFilesResponseKeys: ['fileIDsFromList'],
    addAllFilesResponseKeys: ['sampleOverview', 'files'],
    addAllFileQuery: GET_ALL_FILEIDS_FROM_SAMPLETAB_FOR_ADD_ALL_CART,
    addSelectedFilesQuery: GET_ALL_FILEIDS_SAMPLESTAB_FOR_SELECT_ALL,
  },
  {
    name: 'Files',
    dataField: 'dataFile',
    api: GET_FILES_OVERVIEW_QUERY,
    paginationAPIField: 'fileOverview',
    defaultSortField: 'file_name',
    defaultSortDirection: 'asc',
    count: 'numberOfFiles',
    fileCount: 'filesFileCount',
    dataKey: 'id',
    tableID: 'file_tab_table',
    extendedViewConfig: {
      pagination: true,
      manageViewColumns: false,
    },
    columns: [
      {
        cellType: cellTypes.CHECKBOX,
        display: true,
        role: cellTypes.CHECKBOX,
      },
      {
        dataField: 'file_name',
        header: 'File Name',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_category',
        header: 'File Category',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_description',
        header: 'File Description',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_type',
        header: 'File Type',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'file_size',
        header: 'File Size',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
        dataFormatType: dataFormatTypes.FORMAT_BYTES,
        cellType: cellTypes.FORMAT_DATA,
      },
      {
        dataField: 'study_id',
        header: 'Study ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'participant_id',
        header: 'Participant ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'sample_id',
        header: 'Sample ID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'guid',
        header: 'GUID',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
      {
        dataField: 'md5sum',
        header: 'MD5sum',
        display: true,
        tooltipText: 'sort',
        role: cellTypes.DISPLAY,
      },
    ],
    id: 'file_tab',
    tableID: 'file_tab_table',
    tabIndex: '2',
    selectableRows: true,
    tableDownloadCSV: customFilesTabDownloadCSV,
    downloadFileName: 'CCDI Inventory Files Download',
    tableMsg: {
      noMatch: 'No Matching Records Found',
    },
    addFilesRequestVariableKey: 'file_ids',
    addFilesResponseKeys: ['fileIDsFromList'],
    addAllFilesResponseKeys: ['fileOverview', 'files'],
    addAllFileQuery: GET_ALL_FILEIDS_FROM_FILESTAB_FOR_ADD_ALL_CART,
    addSelectedFilesQuery: GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL,
  },
];

  