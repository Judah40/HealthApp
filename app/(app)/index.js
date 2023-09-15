import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSession } from "../../ctx";
import { useLayoutEffect } from "react";
import { router, useNavigation } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
export default function Index() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });
  const { signOut } = useSession();
  return (
    <View className="flex-1 bg-gray-200">
      {/**header */}
      <View className="w-full h-80 bg-green-500 rounded-bl-full items-center justify-center">
        <Text className="text-4xl font-bold text-white p-8">Home</Text>

        <Text className="text-xl text-white font-semibold">Welcome Doctor</Text>
        <Text className="text-white">How we can help you today? </Text>
      </View>

      {/**body */}
      <View className="flex-1 items-center justify-center space-y-12">
        <View className="flex-row space-x-12">
          {/**patient */}

          <TouchableOpacity
            onPress={() => {
              router.push("/patience");
            }}
            className="w-40 h-40 rounded-2xl border-[0.2px] border-gray-300 bg-white items-center justify-center space-y-4"
          >
            <Entypo name="user" size={50} color={"#4CAF50"} />
            <Text className="text-green-500 text-lg">My Patients</Text>
          </TouchableOpacity>
          {/**Appointment */}
          <TouchableOpacity
            onPress={() => {
              router.push("/appointment");
            }}
            className="w-40 h-40 rounded-2xl border-[0.2px] border-gray-300 bg-white items-center justify-center space-y-4"
          >
            <Entypo name="calendar" size={50} color={"#4CAF50"} />
            <Text className="text-green-500 text-lg">Appointment </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row space-x-12">
          {/**profile */}
          <TouchableOpacity
            onPress={() => {
              router.push("/profile");
            }}
            className="w-40 h-40 rounded-2xl border-[0.2px] border-gray-300 bg-white items-center justify-center space-y-4"
          >
            <AntDesign name="profile" size={50} color={"#4CAF50"} />
            <Text className="text-green-500 text-lg">Profile </Text>
          </TouchableOpacity>

          {/**calendar */}
          <TouchableOpacity
            onPress={() => {
              router.push("/calendar");
            }}
            className="w-40 h-40 rounded-2xl border-[0.2px] border-gray-300 bg-white items-center justify-center space-y-4"
          >
            <AntDesign name="calendar" size={50} color={"#4CAF50"} />
            <Text className="text-green-500 text-lg">calendar </Text>
          </TouchableOpacity>
        </View>


            {/**Sign Out */}
            <View
            
            className="w-10/12 items-center ">
            <TouchableOpacity
            onPress={()=>{
              signOut()
              router.push('/sign-in')
            }}
            className="space-x-2 w-5/12 items-center h-16 flex-row justify-center rounded-xl border border-green-500">
            <FontAwesome name="sign-out" size={24} color="black" />
            <Text className="text-lg font-bold">
            Sign Out
            </Text>
            </TouchableOpacity>
            </View>
      </View>
    </View>
  );
}
