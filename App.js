import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import AppComp from "./src";
import configureStore from "./src/configureStore";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppComp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
