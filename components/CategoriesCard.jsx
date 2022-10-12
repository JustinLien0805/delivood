import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import burger from "../assets/burger.png";
const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="p-2 rounded-lg mr-2 relative">
      <Image source={burger} className="w-20 h-20 object-contain" />
      <Text className="absolute bottom-2 right-2 font-bold text-white text-lg">title</Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
