/**
 * This object is used to mock the response for test purposes
 */
export const VALIDATION_REPORT_ERRORS: any = [
  {
    messageId: 'ALL_FILE_NAME_INFO',
    conceptName: 'INFO',
    conceptType: 'MEASURE',
    conceptValue: 'Dataset Name',
    occurrences: 1,
    severity: 'AN_INFO',
    description1: 'Dataset Info',
    description2: 'Appears when reported value of a concept is unexpected',
    firstOccurrences: ['INFO->Dataset_Name', 'DATASET_NAME->MILK_TABLEA_M_BE_2020_0002_V0002.csv'],
    nextOccurrences: [],
    highlight: false
  },
  {
    messageId: 'VR_MILK_041',
    conceptName: 'REF_AREA',
    conceptType: 'MEASURE',
    conceptValue: 'BE',
    occurrences: 2,
    severity: 'INFO',
    description1: 'Plausible value between 200 and 600',
    description2: 'Appears when reported value of a concept is unexpected',
    firstOccurrences: ['REF_AREA->BE', 'TIME_PERIOD->2020-01', 'DAIRYPROD->D1110D', 'MILKITEM->THS_T',
      'OBS_VALUE->50.98', 'Position: Data_Entry!E7'],
    nextOccurrences: ['BE;2020-02;D1110D;THS_T;1200.49, Data_Entry!I7'],
    highlight: false
  },
  {
    messageId: 'VR_MILK_005',
    conceptName: 'REF_AREA',
    conceptType: 'MEASURE',
    conceptValue: 'Dataset Name',
    occurrences: 2,
    severity: 'WARNING',
    description1: 'Value should be between 100 and 1000',
    description2: 'Appears when reported value of a concept is unexpected',
    firstOccurrences: ['REF_AREA->BE', 'TIME_PERIOD->2020-01', 'DAIRYPROD->D1110D', 'MILKITEM->THS_T',
      'OBS_VALUE->50.98', 'Position: Data_Entry!E7'],
    nextOccurrences: ['BE;2020-02;D1110D;THS_T;1200.49, Data_Entry!I7'],
    highlight: false
  }
];
