import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export const Dropdown = ({ options, onUpdate, selectedValue }) => {
  return (
    <View>
      <Text>Select Country from dropdown</Text>
      <RNPickerSelect
        style={{
          border: 1,
          borderRadius: 10,
          backgroundColor: "red",
          width: 300,
        }}
        onValueChange={onUpdate}
        items={options}
      />

      {selectedValue && (
        <View>
          <Text>
            Capital:{" "}
            {selectedValue.capitalCity
              ? selectedValue.capitalCity
              : "Not available"}{" "}
          </Text>
          <Text>
            Longitude:{" "}
            {selectedValue.longitude
              ? selectedValue.longitude
              : "Not available"}
          </Text>
          <Text>
            Latitude:{" "}
            {selectedValue.latitude ? selectedValue.latitude : "Not available"}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Dropdown;
