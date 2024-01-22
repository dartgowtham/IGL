import { View, Text, TouchableOpacity,SafeAreaView, Image,FlatList } from 'react-native'
import React from 'react'
import Back from '../../assets/Images/backblue.png'
import data from '../../assets/Json/area_list.json'


// const daa= JSON.stringify(data)
export default function Whatsnew({navigation}) 
{
  data.forEach(e => {
    po=e.Technology_area
  });
  const renderItem = ({ item }) => (
    <View style={{width:350,height:60,fontSize:29,borderRadius:15,justifyContent:'center',fontWeight:900,marginTop:20,backgroundColor:'#F5F5F5',marginLeft:10,marginRight:10,elevation:10}}>
      <Text style={{marginLeft:10,fontWeight:900,fontSize:16,color:'#097ab8'}}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{marginTop:35}}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}><Image source={Back} alt='Go' style={{width:40,height:40,aspectRatio:1.2}}/></TouchableOpacity>
        <Text style={{width:300,alignSelf:'center',fontSize:25,fontWeight:900,color:'#097ab8'}}>Area List</Text>
      </View>
      <View>
        <FlatList
      data={po}
      renderItem={renderItem}
    />
    
         
      </View>
      </SafeAreaView>
  )
}