import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

const MovieCard = ({ movie }) => {
  const navigation = useNavigation();

  const handleDetail = () => {
    navigation.navigate("Detail-Movie", { MovieId: movie.id });
  };

  return (
    <TouchableOpacity onPress={handleDetail}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: movie.imgUrl,
          }}
        />
        <Text style={styles.titleStyle}>{movie.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;
const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 25,
    backgroundColor: "#820000",
    height: 500,
    borderRadius: 20,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 450,
    width: deviceWidth - 25,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: radius,
    opacity: 0.9,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
    padding: 10,
  },
});

export default MovieCard;
