import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import { GET_MOVIES } from "../../queries";
import MovieCard from "../components/MovieCard";

const MovieScreen = ({ route }) => {
  const { genreId } = route.params;

  const { loading, error, data } = useQuery(GET_MOVIES);
  // console.log(data.movies);
  const filtered = data.movies.filter((movie) => {
    return movie.genreId === +genreId;
  });

  if (loading) return <Text>Loading. . .</Text>;
  if (error) return <Text>Error. . .</Text>;

  const renderItem = ({ item }) => {
    return <MovieCard movie={item} genre={route} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={filtered} renderItem={renderItem} keyExtractor={(item) => item.id} />
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

export default MovieScreen;
