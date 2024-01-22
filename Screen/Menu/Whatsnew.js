import { View, Text, TouchableOpacity,SafeAreaView, Image,FlatList } from 'react-native'
import React from 'react'
import Back from '../../assets/Images/backmaroon.png'
import data from '../../assets/Json/Whats.json'


// const daa= JSON.stringify(data)
export default function Whatsnew({navigation}) 
{
  data.forEach(e => {
    po=e.points
  });
  const renderItem = ({ item }) => (
    <View style={{width:350,height:60,borderRadius:5,borderLeftWidth:5,borderLeftColor:'#6e0202',justifyContent:'center',marginTop:20,backgroundColor:'#F5F5F5',marginLeft:10,marginRight:10,elevation:10}}>
      <Text style={{marginLeft:10,fontWeight:900,fontSize:16}}>{item}</Text>
    </View>
  );
  console.log(po)
  return (
    <SafeAreaView style={{marginTop:35}}>
      <View style={{flexDirection:'row',}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}><Image source={Back} alt='Go' style={{width:40,height:40,aspectRatio:1.2}}/></TouchableOpacity>
        <Text style={{width:300,alignSelf:'center',fontSize:25,fontWeight:900,color:'#6e0202'}}>What's New</Text>
      </View>
      <View>
        <Text style={{marginTop:20,marginLeft:10,fontSize:19,width:3770,fontWeight:900,color:'#6e0202'}}>{data[0].header}</Text>
        <FlatList
      data={po}
      renderItem={renderItem}
    />
    
         
      </View>
      </SafeAreaView>
  )
}