import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Loading from "../components/Loading";
import PlanetCard from "../components/PlanetCard";
import usePlanets from "../hooks/usePlanets";

const PlanetsScreen = ({ onGoBack }) => {
  const { planets, loading, error } = usePlanets();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planetas</Text>
      <Text style={styles.description}>
        Una lista con informacion sobre los planetas de Dragon Ball Z.
      </Text>

      <View style={styles.content}>
        {loading ? (
          <Loading message="Cargando planetas..." />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <FlatList
            data={planets}
            renderItem={({ item }) => <PlanetCard planet={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
          />
        )}
      </View>

      <CustomButton title="Volver" onPress={onGoBack} />
    </View>
  );
};

export default PlanetsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#adabab",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  list: {
    paddingBottom: 12,
  },
  error: {
    color: "#FFCB05",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  }
});
