import { View, Text, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import ChatScreen from "../../components/chatScreen";
import { getRandomUser } from "../../../data";
const patience = () => {

// states
const [data,setData]= useState({})


  // hide header when screen loads
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  useEffect(() => {
    // get User from db
    getRandomUser()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <View className="flex-1 bg-gray-200 ">
      {/**user one */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View className="w-full h-24 bg-white mt-4">
          <ChatScreen name={item.first_name} img={item.avatar} />
        </View>
        )}
      />
      
    </View>
  );
};

export default patience;
