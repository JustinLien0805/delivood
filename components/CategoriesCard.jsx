import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="p-2 mr-2 relative">
      <Image source={{ uri: imgUrl }} className="w-24 h-24 rounded-lg" />
      <Text className="absolute bottom-2 right-2 font-bold text-white text-xl">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
