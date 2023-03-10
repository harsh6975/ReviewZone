import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screen/home";
import ReviewDetails from "../screen/reviewDetails";
import Header from "../shared/header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="ReviewZone" />
        ),
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#000033",
    headerStyle: { backgroundColor: "white", height: 60 },
  },
});

export default HomeStack;
