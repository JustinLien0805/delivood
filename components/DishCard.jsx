import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";
const DishCard = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        className="flex-row justify-between w-full border-t-[0.5px] border-gray-300 pl-4"
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className="grow py-2 space-y-1">
          <Text className="text-2xl font-bold text-purple-600">{name}</Text>
          <Text className="text-gray-500">{description}</Text>
          <Text className="text-xl">${price}</Text>
        </View>
        <Image
          source={{
            uri: urlFor(image).url(),
          }}
          className="bg-red-500 w-40"
        />
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row items-center space-x-3 pl-4 my-2">
          <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
              className={`rounded-full ${items.length>0 ? "bg-purple-500": "bg-neutral-500"} p-2`}
            >
              <MinusIcon
                color="white"
                // color="#00CCBB"
                size={20}
              />
            </TouchableOpacity>
          <Text className="text-xl">{items?.length}</Text>
          <TouchableOpacity
            className="rounded-full bg-purple-500 p-2"
            onPress={addItemToBasket}
          >
            <PlusIcon color="#FFF" size={20} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishCard;
