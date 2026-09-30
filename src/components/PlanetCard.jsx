import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PlanetCard = ({ planet }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: planet.image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{planet.name}</Text>
      <Text style={styles.status}>
        {planet.isDestroyed ? "Destruido" : "Intacto"}
      </Text>
      <Text style={styles.text}>{planet.description}</Text>
    </View>
  );
};

export default PlanetCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  status: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
    marginTop: 4,
  },
  text: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
});
