import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getCountriesInfo } from "./actions/countryAction";
import Dropdown from "./DropDown";

const AppComp = () => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    dispatch(getCountriesInfo());
  }, [dispatch]);

  const isFetching = useSelector((state) => state.country.fetching);
  const countryData = useSelector((state) => state.country.data);
  const error = useSelector((state) => state.country.error);
  const _onChange = (value) => {
    const selectedValue = countryData.find((country) =>  country.id === value)
    setSelectedCountry(selectedValue);
  };

  return (
    <View style={styles.container}>
      {isFetching ? (
        <Text>Loading...</Text>
      ) : countryData ? (
        <Dropdown selectedValue={selectedCountry} options={countryData} onUpdate={_onChange} />
      ) : error ? (
        <Text>Some Error Occcured</Text>
      ) :<View />}
    </View>
  );
};

export default AppComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
