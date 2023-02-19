import React from "react";
import { StyleSheet, View, Text } from "react-native";

 function Home() {
  return (
    <View style={styles.container}>
      <Text> Home Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Home;
