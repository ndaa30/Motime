import { useQuery } from "@apollo/client";
import React from "react";
import { View, Text, Dimensions, StyleSheet, Image, ScrollView } from "react-native";
import { GET_MOVIEUSER } from "../../queries";

const DetailMovieScreen = ({ route }) => {
  const { MovieId } = route.params;
  const { loading, error, data } = useQuery(GET_MOVIEUSER, {
    variables: { movieUserId: MovieId },
  });

  if (loading) return <Text>Loading. . .</Text>;
  if (error) return <Text>Error. . .</Text>;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: data.movieUser.imgUrl,
          }}
        />
        <Text style={styles.titleStyle}>{data.movieUser.title}</Text>
        <Text style={styles.synopsisStyle}>{data.movieUser.synopsis}</Text>
        <Text style={styles.synopsisStyle}>By : {data.movieUser.user.username}</Text>
      </ScrollView>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DD4A48",
    alignItems: "center",
  },
  cardContainer: {
    width: deviceWidth - 25,
    backgroundColor: "#820000",
    height: 700,
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
  synopsisStyle: {
    color: "#fff",
    padding: 10,
  },
});

export default DetailMovieScreen;
