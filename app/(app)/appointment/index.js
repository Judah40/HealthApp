import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router';

const appointment = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({ headerShown: false });
    });
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default appointment