import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StudentCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Nombre</Text>
      <Text style={styles.name}>Salvador Eduardo Martinez Zuniga</Text>

      <Text style={styles.label}>Carnet</Text>
      <Text style={styles.value}>20230690</Text>

      <Text style={styles.label}>Sección y grupo</Text>
      <Text style={styles.value}>B-2</Text>
    </View>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
});
