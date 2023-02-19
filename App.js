import React, { useState } from "react";
import * as font from "expo-font";
import Home from "./screen/home";
import AppLoading from "expo-app-loading";

const getFonts = () =>
  font.loadAsync({
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return <Home />;
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
