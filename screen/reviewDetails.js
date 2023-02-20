import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../shared/card";

const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};

function ReviewDetails({ navigation }) {
  // const handlePress = () => {
  //   navigation.goBack();
  // };
  const rating = navigation.getParam("rating");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.headingText}>
          {navigation.getParam("title")}
        </Text>
        <Text style={globalStyles.headingText}>
          {navigation.getParam("body")}
        </Text>
        <View style={styles.rating}>
          <Text style={globalStyles.headingText}>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});

export default ReviewDetails;
