import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";

function ReviewDetails({ navigation }) {
  const handlePress = () => {
    navigation.goBack();
  };
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headingText}> Review Screen </Text>
      <Button title="Go back to home screen" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ReviewDetails;
