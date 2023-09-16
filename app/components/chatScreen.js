import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
const chatScreen = ({name, img}) => {
  return (
    <View className="p-4 flex-row space-x-4">
      {/**profile pic */}

      <TouchableOpacity className="w-16 h-16 rounded-full bg-gray-300 items-center justify-center ">
      <Image source={{uri:`${img}`}} className="w-12 h-12 items-center justify-center"/>
      </TouchableOpacity>

      {/**patient name */}

      <View className="h-full justify-center">
        {/**titel */}
        <Text>Patient Name</Text>

        {/**name */}

        <Text className="text-lg text-green-500 font-semibold">{name}</Text>
      </View>

      {/**chat and phone call */}
      <View className="flex-1 w-full flex-row items-center justify-end space-x-6">
        {/**phone call */}
        <TouchableOpacity>
          <FontAwesome name="phone" size={35} color="#4CAF50" />
        </TouchableOpacity>
        {/**chat */}
        <TouchableOpacity>
          <Entypo name="chat" size={35} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default chatScreen;
