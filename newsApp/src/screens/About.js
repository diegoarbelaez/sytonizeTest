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
import FotoDiego from "../assets/diego_firma.png";

const supportedURL = "https://google.com";

export default function Favorite({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textTitle}>About the App</Text>
          <Text style={styles.textDescription}>
            This is a simple app that uses the Newsdata.io API to display news
            from around the world. The app has a Home screen where you can
            select the categories you want to see.
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

          <Text style={styles.textBold}>React Native Paper 5.x</Text>
          <Text style={styles.textDescription2}>
            React Native Paper is a UI component library for React Native that
            follows Google Material Design guidelines.
          </Text>
          <OpenURLButton
            style={styles.url}
            url="https://callstack.github.io/react-native-paper/"
          >
            https://callstack.github.io/react-native-paper/
          </OpenURLButton>

          <Text style={styles.textBold}>Newsdata.io</Text>
          <Text style={styles.textDescription2}>
            Newsdata.io is a news API that provides news from around the world.
            It is free to use and it has a limit of 100 requests per day.
          </Text>
          <OpenURLButton
            style={styles.url}
            url="https://newsdata.io/search-news"
          >
            https://newsdata.io/search-news
          </OpenURLButton>

          <Text style={styles.spacer}> </Text>
          <Text style={styles.textTitle}>About the Developer</Text>
          <Text style={styles.textDescription2}>
            As a seasoned Full-Stack Software Developer with over 5 years of
            experience in remote work, my technical stack includes JavaScript
            with React, Angular, HTML5, CSS3, SaSS, along with frameworks like
            Bootstrap and Tailwind. I bring to the table 4 years of BackEnd
            development experience utilizing PHP and Node.js, with a focus on
            Express and API integrations. I am proficient in mobile development
            with IONIC. My technical acumen also spans SQL, MySQL, and MongoDB,
            and I possess extensive experience in the development and
            integration of RESTful API services. I pride myself on being highly
            responsive and professional, recognized for my profound sense of
            belonging, drive for achievement, and robust teamwork capabilities.
          </Text>
          <Image source={FotoDiego} style={styles.fotoDiego} />

          <OpenURLButton style={styles.url} url="https://diegoarbelaez.com">
            https://diegoarbelaez.com
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
  fotoDiego: {
    alignSelf: "center",
    marginTop: 20,
  },
  spacer: {
    marginBottom: 20,
  },
});
