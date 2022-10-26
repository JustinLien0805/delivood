import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import {
  ArrowLeftIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import BasketIcon from "../../components/BasketIcon";
import DishCard from "../../components/DishCard";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
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
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="h-56 w-full p-4"
          />
          <View className="h-56 w-full absolute z-1 bg-black opacity-60"></View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-12 left-4 rounded-full bg-white p-2"
          >
            <ArrowLeftIcon color="#9061F9" size={20} />
          </TouchableOpacity>
          <Text className="absolute bottom-10 left-4 text-white text-5xl font-bold">
            {title}
          </Text>
          <View className="absolute bottom-3 left-4 flex-row items-center justify-center gap-2">
            <View className="flex-row items-center">
              <StarIcon color="#9061F9" />
              <Text className="text-white ml-2 font-semibold">
                <Text className="text-violet-400">{rating}</Text> · {genre}
              </Text>
            </View>
            <View className="flex-row items-center">
              <MapPinIcon color="#9061F9" />
              <Text className="font-semibold text-white ml-2">{address}</Text>
            </View>
          </View>
        </View>
        <View className="mt-4">
          <Text className="text-3xl font-bold ml-4">Menu</Text>
          <View className="mt-4">
            {dishes?.map((dish) => (
              <DishCard
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
