import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screen/home";
import ReviewDetails from "../screen/reviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "ReviewZone",
      // headerStyle:{backgroundColor:"gray"}
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
    headerTintColor: "white",
    headerStyle: { backgroundColor: "gray", height: 60 },
  },
});

export default createAppContainer(HomeStack);
