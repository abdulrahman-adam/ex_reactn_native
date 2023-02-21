import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Card from "./src/components/pages/HOC/Card/Card";
import Auth from "./src/components/screens/Auth/Auth";
import Profil from "./src/components/screens/Profil/Profil";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <View style={classes.container}>
      {user === null ? <Auth /> : <Profil />}
      <StatusBar style="auto" />
      <Card />
    </View>
  );
}

// 1 ere: Les composants natifs
// 2 eme: Les événements
// 3 eme le style: inLine style, StyleSheet

const classes = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  texte: {
    color: "green",
  },
});

//Exercice 1:
//1/ Créer deux composants et les exporter depuis:
//1.1/ src/components/screens/Auth/Auth.jsx
//1.2/ src/components/screens/Profil/Profil.jsx

//2/ Dans App.js, créer une variable d'état nommée user, initialisée a null
//2.1/ Utiliser un opérateur ternaire pour afficher le composant Auth si user est null sinon afficher le composant Profil

//3. Envoyer le code de App.js
