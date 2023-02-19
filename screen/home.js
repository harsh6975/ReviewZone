import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";

function Home({ navigation }) {
  const handlePress = () => {
    navigation.navigate("ReviewDetails");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headingText}> Home Screen </Text>
      <Button title="Go to review details" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Home;
