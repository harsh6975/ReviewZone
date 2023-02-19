import React, { useState } from "react";
import * as font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/homeStack";

const getFonts = () =>
  font.loadAsync({
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
