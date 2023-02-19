import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Header({ navigation, title }) {
  const MenuHandler = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        style={styles.icon}
        onPress={MenuHandler}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  icon: {
    position: "absolute",
    left: 0,
  },
});

export default Header;
