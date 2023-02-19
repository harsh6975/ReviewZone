import React from "react";
import { StyleSheet, View, Text } from "react-native";

 function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Home Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading:{
    fontFamily:'lato-bold',
    fontSize:18
  }
});

export default Home;
