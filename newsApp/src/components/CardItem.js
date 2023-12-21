import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Card, useTheme } from "react-native-paper";
import { truncate } from "lodash";

const CardItem = (props) => {
  const theme = useTheme();

  const { content, description, image_url, pubDate, title } = props;

  const { navigation } = props;

  const stylesCard = {
    backgroundColor: theme.colors.elevation.level5,
    ...styles.card,
  };

  //Navigation to NewOverview where we will receive all from the card and display it
  const handlePress = () => {
    navigation.navigate("NewOverview", {
      title,
      description,
      image_url,
      content,
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <Card style={stylesCard}>
        <Card.Cover source={{ uri: image_url }} />
        <Card.Title
          title={title}
          subtitle={truncate(description, { length: 50 })}
          titleNumberOfLines={1}
          style={styles.title}
        />
        <Card.Content>
          <Text style={styles.description}>
            {truncate(content, { length: 150 })}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Text style={styles.pubDate}>{pubDate}</Text>
        </Card.Actions>
      </Card>
    </Pressable>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 12,
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  pubDate: {
    fontSize: 10,
    color: "#fff",
  },
});
