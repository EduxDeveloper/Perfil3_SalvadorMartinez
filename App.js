import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StatusBar as RNStatusBar, StyleSheet, View } from "react-native";
import PlanetsScreen from "./src/screens/PlanetsScreen";
import StudentScreen from "./src/screens/StudentScreen";

export default function App() {
  const [screen, setScreen] = useState("student");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {screen === "student" ? (
        <StudentScreen onGoToPlanets={() => setScreen("planets")} />
      ) : (
        <PlanetsScreen onGoBack={() => setScreen("student")} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#adabab",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight || 0 : 50,
  },
});
