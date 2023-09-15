import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Agenda, Calendar, LocaleConfig } from "react-native-calendars";

const calendarMain = () => {
  // hide header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  // state
  const [selected, setSelected] = useState({
    '2023-09-15': [{ name: 'Event 1' }],
    '2023-09-16': [{ name: 'Event 2' }],
    // Add more items for other dates
  });

  return (
    <View className="flex-1 items-center">
      <Agenda
      style={{width:400}}
      items={selected}
      renderItem={(item)=>(
        <View>
        
        </View>
      )}
      />
    </View>
  );
};

export default calendarMain;


