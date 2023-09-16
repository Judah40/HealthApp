import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const chatScreen = () => {
  return (
    <TouchableOpacity className="p-4 flex-row space-x-4">
      {/**profile pic */}

      <TouchableOpacity className="w-16 h-16 rounded-full bg-gray-300 "></TouchableOpacity>

      {/**patient name */}

      <View className="h-full justify-center">
        {/**titel */}
        <Text>Patient Name</Text>

        {/**name */}

        <Text className="text-lg font-semibold">Judah Alvin Dore</Text>
      </View>

      <View>
      
      </View>
    </TouchableOpacity>
  );
};

export default chatScreen;
