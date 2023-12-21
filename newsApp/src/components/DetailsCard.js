import { ScrollView, View } from "react-native";
import React from "react";
import { Card, Text, useTheme } from "react-native-paper";

const DetailsCard = (props) => {
  const theme = useTheme();
  const { title, description, image_url, content } = props;

  return (
    <ScrollView>
      <Text
        style={{
          color: "black",
          marginVertical: 10,
        }}
        variant="headlineMedium"
      >
        {title}
      </Text>
      <Card
        style={{
          backgroundColor: theme.colors.elevation.level5,
          margin: 10,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Card.Cover source={{ uri: image_url }} />
        <Card.Title
          title={title}
          subtitle={description}
          titleNumberOfLines={1}
          style={{
            color: "black",
            marginVertical: 10,
          }}
        />
        <Card.Content>
          <Text
            style={{
              color: "white",
              marginVertical: 10,
            }}
          >
            {content}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default DetailsCard;
