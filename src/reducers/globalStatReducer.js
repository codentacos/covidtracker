// Initial state for Redux
const initialState = {
  countryStats: {
    countries: '',
    selected: 'AF',
    noData: true,
    country: '',
    confirmed: '',
    critical: '',
    recovered: '',
    deaths: ''
  },
  globalStats: {
    confirmed: '',
    recovered: '',
    deaths: ''
  }
}

const globalStatReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case 'GLOBAL_STAT_REDUCER':
      return '';
    default:
      return previousState;
  }
}

export default globalStatReducer;