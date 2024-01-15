import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Whatsnew({navigation}) 
{
  return (
    <View style={{marginTop:100,marginLeft:20}}>
      <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
       <Text>Whatsnew</Text> 
    </TouchableOpacity>
    </View>
  )
}