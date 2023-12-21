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
import FotoDiego from "../assets/diego_firma.png";

export default function Account() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
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
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
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
  fotoDiego: {
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
