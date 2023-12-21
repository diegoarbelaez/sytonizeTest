import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
  Alert,
} from "react-native";
import React from "react";
import { Appbar, Chip, Button } from "react-native-paper";
import { useState } from "react";
import { FlatList } from "react-native";
import CardItem from "../components/CardItem";

const categories = ["technology", "science", "sports", "health", "politics"];

const API_KEY = "pub_35144405eb068a3e112fbf780a05cb8515f93";

const Home = ({ navigation, route }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [newsdata, setNewsdata] = useState([]);

  //Funcion para infinite scroll
  const [nextPage, setNextPage] = useState("");

  //Logica para seleccionar y deseleccionar categorias
  //Si la categoria ya esta seleccionada, la deselecciona
  //Si la categoria no esta seleccionada, la selecciona
  const handleSelect = (val) => {
    setSelectedCategories((prev) =>
      prev.find((c) => c === val)
        ? prev.filter((c) => c !== val)
        : [...prev, val]
    );
  };

  const handlePress = async () => {
    //Si no hay categorias seleccionadas, devuelve todas las noticias
    //valida si hay una siguiente pagina, si la hay, la agrega a la url
    const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=es&category=${
      selectedCategories.length > 0 ? selectedCategories.join(",") : ""
    }${nextPage?.length > 0 ? `&page=${nextPage}` : ""}`;

    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          //Validar si data es un array vacio
          //Si es un array vacio, no hay noticias para mostrar
          if (data.results.length > 0) {
            setNewsdata((prev) => [...prev, ...data.results]);
            setNextPage(data.nextPage);
          }
          //Si no es un array vacio, hay noticias para mostrar
          else {
            Alert.alert("Nothing to show", "Select a category");
          }
          //Setear la siguiente pagina para infinite scroll
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="News App" />
      </Appbar.Header>
      <View style={styles.filters}>
        {categories.map((category) => (
          <Chip
            style={styles.chipItem}
            mode="outlined"
            key={category}
            textStyle={{
              fontWeight: "400",
              color: "white",
              padding: 1,
            }}
            showSelectedOverlay
            selected={
              //Buscar en las categorias seleccionadas si la categoria actual esta seleccionada
              //Si esta seleccionada, devuelve true, sino false
              //Esto se usa para cambiar el estado del chip
              selectedCategories.find((c) => c === category) ? true : false
            }
            onPress={() => handleSelect(category)}
          >
            {category}
          </Chip>
        ))}
        <Button
          mode="outlined"
          style={styles.button}
          labelStyle={{ fontSize: 14, margin: "auto" }}
          icon={"sync"}
          onPress={handlePress}
        >
          Get News
        </Button>
      </View>
      <FlatList
        onEndReached={() => handlePress()}
        style={styles.flatList}
        data={newsdata}
        renderItem={({ item }) => (
          <CardItem
            navigation={navigation}
            description={item.description}
            image_url={
              item.image_url
                ? item.image_url
                : "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
            }
            title={item.title}
            content={item.content}
          />
        )}
        ListFooterComponent={
          nextPage && (
            <ActivityIndicator
              size="large"
              color="#000"
              style={styles.spinner}
            />
          )
        }
      ></FlatList>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  chipItem: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  button: {
    maxWidth: 400,
    padding: 0,
    maxHeight: 40,
  },
  flatList: {
    flex: 1,
    height: "auto",
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
    color: "#ef5350",
  },
});
