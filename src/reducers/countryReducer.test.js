import countryReducer, {
  initialState,
  homeContainerTypes,
} from "./countryReducer";

/* eslint-disable default-case, no-param-reassign */
describe("Country reducer tests", () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it("should return the initial state", () => {
    expect(countryReducer(undefined, {})).toEqual(state);
  });

  it("should return the fetching true when 'CountriesInfoFetching' is dispatched", () => {
    const expectedResult = { ...initialState, fetching: true };
    expect(
      countryReducer(state, {
        type: "CountriesInfoFetching",
      })
    ).toEqual(expectedResult);
  });

  it("should ensure that the user data is present and fetching = false when CountriesInfoSuccess is dispatched", () => {
    const data = [
      {
        id: "ABW",
        iso2Code: "AW",
        name: "Aruba",
        region: {
          id: "LCN",
          iso2code: "ZJ",
          value: "Latin America & Caribbean ",
        },
        adminregion: { id: "", iso2code: "", value: "" },
        incomeLevel: { id: "HIC", iso2code: "XD", value: "High income" },
        lendingType: { id: "LNX", iso2code: "XX", value: "Not classified" },
        capitalCity: "Oranjestad",
        longitude: "-70.0167",
        latitude: "12.5167",
      },
    ];
    const expectedResult = {
      ...initialState,
      fetching: false,
      data,
      error: null,
    };
    expect(
      countryReducer(state, {
        type: "CountriesInfoSuccess",
        payload: data,
      })
    ).toEqual(expectedResult);
  });

  it("should ensure that the error has some data and fetching = false when CountriesInfoError is dispatched", () => {
    const error = "something_went_wrong";
    const expectedResult = {
      ...initialState,
      fetching: false,
      data: null,
      error,
    };
    expect(
      countryReducer(state, {
        type: "CountriesInfoError",
        payload: error,
      })
    ).toEqual(expectedResult);
  });
});
