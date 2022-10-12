import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="mr-4">
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-t-lg"
      />
      <View className="px-3 pb-4 bg-violet-200 rounded-b-lg">
        <Text className="font-bold text-lg pt-2 uppercase">{title}</Text>

        <View className="flex-row items-center pb-2">
          <StarIcon color="#9061F9" />
          <Text className="text-gray-500 ml-2">
            <Text className="text-purple-600">{rating}</Text> · {genre}
          </Text>
        </View>
        <View className="flex-row items-center">
          <MapPinIcon color="#9061F9" />
          <Text className="text-sm text-gray-500 ml-2">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
