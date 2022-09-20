import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const Header = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 90,
    backgroundColor: "#820000",
    justifyContent: "flex-end",
    paddingBottom: 20,
    alignItems: "center",
  },
  labelStyle: {
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "italic",
    color: "#fff",
  },
});

export default Header;
