import { View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

import sanityClient from "../sanity";

const FeatureRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type-> {
            name
          }
        },
      }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      })
      .catch((err) => {
        console.log("Err at Featured Row:", err);
      });
  }, [id]);
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
        {restaurants?.map((restaurant, i) => (
          <RestaurantCard
            key={`${restaurant._id}-${i}`}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            shortDescription={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
