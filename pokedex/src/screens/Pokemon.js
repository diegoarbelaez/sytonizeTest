import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonDetailsByIdApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Pokemon({ navigation, route }) {
  const id = route.params.id;

  const [pokemonData, setPokemonData] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          size={20}
          color="#ef5350"
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 20 }}
        />
      ),
    });
  }, [navigation, id]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getPokemonDetailsByIdApi(id);
        setPokemonData(response);
        setLoading(false);
      } catch (error) {
        navigation.goBack(); //if something goes wrong, go back to the previous screen
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#ef5350" />
      </View>
    );
  }

  if (!pokemonData) return null;

  return (
    <ScrollView>
      <Header
        name={pokemonData.name}
        order={pokemonData.order}
        image={pokemonData.sprites.other["official-artwork"].front_default}
        type={pokemonData.types[0].type.name}
      ></Header>
      <Type types={pokemonData.types}></Type>
      <Stats stats={pokemonData.stats}></Stats>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
