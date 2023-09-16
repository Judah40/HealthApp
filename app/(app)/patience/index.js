import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import ChatScreen from "../../components/chatScreen";
import { getRandomUser } from "../../../data";
const patience = () => {
  // hide header when screen loads
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  useEffect(() => {
    // get User from db
    getRandomUser()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <View className="flex-1 bg-gray-200 ">
      {/**user one */}
      <View className="w-full h-24 bg-white">
        <ChatScreen />
      </View>
    </View>
  );
};

export default patience;
