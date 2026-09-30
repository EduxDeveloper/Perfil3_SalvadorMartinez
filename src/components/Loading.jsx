import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loading = ({ message = "Cargando..." }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FFCB05" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginTop: 12,
  },
});
