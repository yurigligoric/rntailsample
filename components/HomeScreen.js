import { View, Text, Image } from 'react-native'
import React from 'react'
import { NativeWindStyleSheet } from 'nativewind'

const HomeScreen = () => {
  return (
    <View >
      <Text className='font-bold text-red-950 text-lg' >HomeScreen</Text>
      <Image source={require("../assets/Confident.png")} style={{height: 100, width: 100, borderRadius: 50, marginTop: 25, borderColor: 'white', borderWidth: 2}} />

    </View>
  )
}

NativeWindStyleSheet.create({
  container: {
    
  }



})
export default HomeScreen