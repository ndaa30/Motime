import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

import { View, Text, StyleSheet, FlatList, Button, ScrollView } from "react-native";
import { GET_GENRES } from "../../queries";
import GenreButton from "../components/GenreButton";

const GenreScreen = () => {
  const { loading, error, data } = useQuery(GET_GENRES);

  if (loading) return <Text>Loading. . .</Text>;
  if (error) return <Text>Error. . .</Text>;

  const renderItem = ({ item }) => {
    return <GenreButton genre={item} />;
  };

  return (
    <View>
      <FlatList data={data.genres} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default GenreScreen;
