import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";
const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex-row"
    >
      <CategoriesCard imgUrl="" title="test" />
      <CategoriesCard imgUrl="" title="test" />
    </ScrollView>
  );
};

export default Categories;
