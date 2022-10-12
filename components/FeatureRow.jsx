import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
const FeatureRow = ({ id, title, description, featureCategory }) => {
  return (
    <View className="px-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-bold uppercase text-purple-500">
          {title}
        </Text>
        <ArrowRightIcon color={"#9061F9"} />
      </View>
      <Text className="text-sm text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id="123"
          imgUrl="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/161075.jpg"
          title="sushi"
          rating={3}
          genre="japan"
          address="21313"
          shortDescription="ddsfs"
          dishes={[]}
          long={123}
          lat={123}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/161075.jpg"
          title="sushi"
          rating={3}
          genre="japan"
          address="21313"
          shortDescription="ddsfs"
          dishes={[]}
          long={123}
          lat={123}
        />
        
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
