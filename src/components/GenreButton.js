import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GenreButton = ({ genre }) => {
  const navigation = useNavigation();
  const handleListMovie = () => {
    navigation.navigate("List-Movie", { genreId: genre.id });
  };
  return (
    <View style={styles.buttonStyle}>
      <Button title={genre.name} color="#820000" onPress={handleListMovie} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 25,
    width: 250,
  },
});

export default GenreButton;
