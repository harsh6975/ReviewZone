import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";

function ReviewDetails({ navigation }) {
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headingText}>
        {navigation.getParam("title")}
      </Text>
      <Text style={globalStyles.headingText}>
        {navigation.getParam("body")}
      </Text>
      <Text style={globalStyles.headingText}>
        Rating: {navigation.getParam("rating")}
      </Text>

      <Button title="Go back to home screen" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ReviewDetails;
