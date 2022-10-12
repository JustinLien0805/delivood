import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useLayoutEffect } from "react";
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
const HomeSreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row items-center mb-3 px-4 space-x-2">
        <Image source={burger} className="h-7 w-7" />
        <View className="flex-1">
          <Text className="text-xs font-bold text-purple-400">Deliver Now</Text>
          <Text className="text-xl font-bold flex justify-center">
            Current Location
            <ChevronDownIcon color="#9061F9" size={20} />
          </Text>
        </View>
        <UserIcon color="#9061F9" size={32} />
      </View>
      <View className="flex-row mb-3 px-4 space-x-3 items-center">
        <View className="flex-row bg-gray-300 grow h-8 items-center space-x-3 p-1 rounded-lg">
          <MagnifyingGlassIcon color="#9061F9" />
          <TextInput placeholder="Restaurant" />
        </View>
        <AdjustmentsVerticalIcon color="#9061F9" size={32} />
      </View>
      <ScrollView className="h-full">
        <Categories />
        <FeatureRow
          id="1"
          title="recommend"
          description="adsfgdss"
          featureCategory="dfads"
        />
        <FeatureRow
          id="1"
          title="recommend"
          description="adsfgdss"
          featureCategory="dfads"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeSreen;
