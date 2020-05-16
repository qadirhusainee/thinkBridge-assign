import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { getCountriesInfo } from "./countryAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("when a get CountriesInfo is dispatched", () => {
  const store = mockStore({});
  it("fires a fetching action", () =>
    store.dispatch(getCountriesInfo()).then((data) => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "CountriesInfoFetching",
      });
    }), 30000);

    it("fires a error action", () =>
    store.dispatch(getCountriesInfo()).then((data) => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "CountriesInfoFetching",
      });
    }).catch((error)=> {
      expect(store.getActions()).toEqual({
        type: "CountriesInfoError",
        payload: error.message
      });
    }), 30000)
});
