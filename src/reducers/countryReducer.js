export const initialState = {
  fetching: false,
  data: null,
  error: null,
};

const ACTION_HANDLERS = {
  CountriesInfoFetching: (state) => {
    return {
      ...state,
      fetching: true,
    };
  },
  CountriesInfoSuccess: (state, action) => {
    return {
      ...state,
      fetching: false,
      data: action.payload,
      error: null
    };
  },
  CountriesInfoError: (state, action) => {
    return {
      ...state,
      fetching: false,
      data: null,
      error: action.payload,
    };
  },
};

export default (state = initialState, action) =>
  ACTION_HANDLERS[action.type]
    ? ACTION_HANDLERS[action.type](state, action)
    : state;
