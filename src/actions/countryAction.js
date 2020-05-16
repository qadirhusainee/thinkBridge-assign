import axios from "axios";
export const getCountriesInfo = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "CountriesInfoFetching" });
      let response = await axios.get(
        "https://api.worldbank.org/v2/country?format=json&per_page=304"
      )
      if (response.status === 200) {
        const countryData = response.data[1].map((country) => {
          return {
            ...country,
            label: country.name,
            value: country.id,
          };
        });
        dispatch({
          type: "CountriesInfoSuccess",
          payload: countryData,
        });
      } else {
        dispatch({ type: "CountriesInfoError", payload: response.status });
      }

      return;
    } catch (error) {
      dispatch({ type: "CountriesInfoError", payload: error.message });

      throw error;
    }
  };
};
