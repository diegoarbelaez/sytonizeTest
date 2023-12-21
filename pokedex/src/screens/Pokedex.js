import {
  SafeAreaView,
  ActivityIndicator,
  View,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { getPokemonApi, getPokemonDetailsByUrlApi } from "../api/pokemon.js";
import PokemonList from "../components/PokemonList.js";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await loadPokemons();
      setLoading(false);
    })();
  }, []);

  const loadPokemons = async () => {
    const array_pokemons = [];

    try {
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next);

      for (let i = 0; i < response.results.length; i++) {
        const pokemon = await getPokemonDetailsByUrlApi(
          response.results[i].url
        );
        array_pokemons.push({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other["official-artwork"].front_default,
          type: pokemon.types[0].type.name,
        });
      }

      setPokemons([...pokemons, ...array_pokemons]);
    } catch (error) {
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#ef5350" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: -50,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
