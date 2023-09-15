import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router';

const patience = () => {
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

export default patience