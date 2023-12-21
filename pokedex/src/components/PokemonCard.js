import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { capitalize } from "lodash"; //manage strings and capitalize the first letter
import { useNavigation } from "@react-navigation/native";

export default function Pokemon({ pokemon }) {
  const pokemonColor = getColorByPokemonType(pokemon.type);

  const navigation = useNavigation();

  //Customized background for every pokemon
  const pokemonBackground = {
    backgroundColor: pokemonColor,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={pokemonBackground}>
        <Image source={{ uri: pokemon.image }} style={styles.image}></Image>
        <Text style={styles.namePokemon}>{capitalize(pokemon.name)}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  namePokemon: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
