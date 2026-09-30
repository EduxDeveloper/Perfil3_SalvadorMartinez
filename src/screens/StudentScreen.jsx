import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import StudentCard from "../components/StudentCard";
//Profe si mira esto paseme el modulo porfa
//lo quiero mucho JAJAJA feliz día

const StudentScreen = ({ onGoToPlanets }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información del estudiante</Text>
      <Text style={styles.description}>
        Datos personales para el perfil numero 3 del modulo de aplicacioones moviles.
      </Text>
      <StudentCard />
      <CustomButton title="Ver planetas" onPress={onGoToPlanets} />
    </View>
  );
};

export default StudentScreen;

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
});
