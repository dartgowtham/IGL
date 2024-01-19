import { View, Text, TouchableOpacity,SafeAreaView, Image,SectionList, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Back from '../../assets/backmaroon.png'
// import data from '../../assets/Highlights.json'
import data from '../../assets/Json/Highlights.json'


export default function Highlights({navigation}) 
{
  const sections = data.map((sectionData) => ({
    title: sectionData.header,
    data: sectionData.points,  
  }));

  const renderItem = ({ item }) => (
    <View style={{width:350,height:60,borderRadius:5,borderLeftWidth:5,borderLeftColor:'#6e0202',justifyContent:'center',marginTop:20,backgroundColor:'#F5F5F5',marginLeft:20,marginRight:1,elevation:10}}>
      <Text style={{fontWeight:900,fontSize:16,marginLeft:10}}>{item}</Text>

    </View>
  );
  const Sectionhead = ({ section }) => (
    <View>
              <Text style={{fontSize:20,fontWeight:900,marginLeft:10,marginTop:10,color:'#6e0202'}}>{section.title}</Text>
    </View>
  );
  return (
    <SafeAreaView style={{marginTop:35}}>
      <View style={{flexDirection:'row',}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}><Image source={Back} alt='Go' style={{width:40,height:40,aspectRatio:1.2}}/></TouchableOpacity>
        <Text style={{width:300,alignSelf:'center',fontSize:25,fontWeight:900,color:'#6e0202'}}>Highlights</Text>
      </View>
        {/* <ScrollView> */}
      <View>
      <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index} // Ensure unique keys
      renderItem={renderItem}
      renderSectionHeader={Sectionhead}
    />
      </View>
    {/* </ScrollView> */}
      </SafeAreaView>
  )
}