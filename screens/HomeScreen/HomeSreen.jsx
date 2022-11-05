import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import burger from "../../assets/burger.png";
import FeatureRow from "../../components/FeatureRow";
import {
  UserIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../../components/Categories";
import client from "../../sanity";
const HomeSreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(`*[_type == "featured"] {..., restaurants[]->{..., dishes[]->}}`)
      .then((data) => {
        setFeaturedCategories(data);
      })
      .catch((err) => {
        console.log("Err at Home Page:", err);
      });
  }, []);
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center mb-3 px-4 space-x-2">
        <Image source={burger} className="h-7 w-7" />
        <TouchableOpacity className="flex-1" 
        onPress={()=>{
          navigation.navigate("Delivery")
        }}>
          <Text className="text-xs font-bold text-purple-500">Deliver Now</Text>
          <Text className="text-xl font-bold flex justify-center">
            Current Location
            <ChevronDownIcon color="#9061F9" size={20} />
          </Text>
        </TouchableOpacity>
        <UserIcon color="#9061F9" size={32} />
      </View>
      <View className="flex-row mb-3 px-4 space-x-3 items-center">
        <View className="flex-row bg-gray-300 grow h-8 items-center space-x-3 p-1 rounded-lg">
          <MagnifyingGlassIcon color="#9061F9" />
          <TextInput placeholder="Restaurant" className="grow" />
        </View>
        <AdjustmentsVerticalIcon color="#9061F9" size={32} />
      </View>
      <ScrollView className="mb-20">
        <Categories />

        {featuredCategories?.map((category) => (
          <FeatureRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeSreen;
