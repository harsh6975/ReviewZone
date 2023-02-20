import { createStackNavigator } from "react-navigation-stack";
import About from "../screen/about";
import Header from "../shared/header";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About ReviewZone" />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#000033",
    headerStyle: { backgroundColor: "white", height: 60 },
  },
});

export default AboutStack;
