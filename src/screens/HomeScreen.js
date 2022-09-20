import React from "react";
import { View, Text, StyleSheet } from "react-native";

import GenreScreen from "./GenreScreen";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <GenreScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DD4A48",
    alignItems: "center",
  },
});

export default HomeScreen;
