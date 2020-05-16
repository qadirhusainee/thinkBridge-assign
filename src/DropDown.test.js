import "react-native";
import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import DropDown from "./DropDown";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
const data = [
  {
    value: "ABW",
    iso2Code: "AW",
    label: "Aruba",
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

const mockFn = jest.fn();
it("renders correctly", () => {
  renderer.create(
    <DropDown
      onUpdate={jest.fn(() => {})}
      options={data}
      selectedValue={null}
    />
  );
});

it("If country selected show capital", () => {
  const { queryByDisplayValue, getByText, getByDisplayValue } = render(
    <DropDown onUpdate={mockFn} options={data} selectedValue={data[0]} />
  );

});
