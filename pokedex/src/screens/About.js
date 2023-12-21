import React, { useCallback } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  Linking,
  Alert,
  ScrollView,
} from "react-native";
import LogoSyntonize from "../assets/logo_syntonize.jpg";

const supportedURL = "https://google.com";

export default function Favorite({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textTitle}>About the App</Text>
          <Text style={styles.textDescription}>
            This is a simple Pokemon app that shows a list of Pokemons and their
            details. It uses infinite scroll to load more Pokemons (20 per
            page). Also it uses loading indicators to show the user that the app
            is loading data.
          </Text>
          <Text style={styles.textDescription}>
            This app was developed using React Native and was developed for a
            tech interview for the company Syntonize on December 20 - 2023
          </Text>
          <Image source={LogoSyntonize} style={styles.logo_syntonize} />
          <OpenURLButton style={styles.url} url="https://syntonize.com">
            https://syntonize.com
          </OpenURLButton>
          <Text style={styles.textTitle}>What I have used?</Text>
          <Text style={styles.textBold}>Lodash</Text>
          <Text style={styles.textDescription2}>
            Lodash makes JavaScript easier by taking the hassle out of working
            with arrays, numbers, objects, strings, etc.
          </Text>
          <OpenURLButton style={styles.url} url="https://lodash.com">
            https://lodash.com
          </OpenURLButton>
          <Text style={styles.textBold}>React Navigation 6.x</Text>
          <Text style={styles.textDescription2}>
            React Navigation is a powerful library that helps us create
            StackNavigators, DrawerNavigators, and TabNavigators in our React
            Native apps.
          </Text>
          <OpenURLButton style={styles.url} url="https://reactnavigation.org/">
            https://reactnavigation.org/
          </OpenURLButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Not supported URL ${url}`);
    }
  }, [url]);
  return <Button style={styles.url} title={children} onPress={handlePress} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  textDescription: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  logo_syntonize: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 20,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  textDescription2: {
    fontSize: 16,
    marginTop: 10,
  },
  url: {
    paddingTop: 20,
    fontSize: 20,
  },
});
