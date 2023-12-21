import { View, Text } from "react-native";
import React from "react";
import DetailsCard from "../components/DetailsCard";

const NewOverview = (props) => {
  const { title, description, image_url, content } = props?.route?.params;

  return (
    <DetailsCard
      title={title}
      description={description}
      image_url={image_url}
      content={content}
    />
  );
};

export default NewOverview;
