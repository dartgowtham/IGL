
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView ,Image} from 'react-native';
import data from '../../assets/Json/course.json';
import Back from '../../assets/backmaroon.png'


const YourComponent = ({navigation}) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const renderItem = ({ item }) => {
    const isExpanded = expandedItem === item.Sno;

    return (
      <View>
      <View style={{width:350,height:50,borderRadius:5,borderTopWidth:6,borderTopColor:'#f06d16',justifyContent:'center',marginTop:20,backgroundColor:'#F5F5F5',marginLeft:10,marginRight:10,elevation:10}}>
        <TouchableOpacity onPress={() => setExpandedItem(isExpanded ? null : item.Sno)}>
          <Text style={{ marginLeft:10,fontWeight:900,fontSize:22,textAlign:'center',color:'#f06d16' }}>{item.Course_title}</Text>
        </TouchableOpacity>
       
      </View>
       <View>
       {isExpanded && <View style={{marginTop:15,borderRadius:20,backgroundColor:'#ffffff',padding:10,width:350,height:'auto',justifyContent:'center',alignSelf:'center'}}>
        <Text style={{fontSize:17,fontWeight:900}}>{item.Description}</Text>
      </View>}
       </View>
       </View>
    );
  };

  return (
    <SafeAreaView style={{marginTop:35}}>
           <View style={{flexDirection:'row',}}>
             <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}><Image source={Back} alt='Go' style={{width:40,height:40,aspectRatio:1.2}}/></TouchableOpacity>
             <Text style={{width:300,alignSelf:'center',fontSize:25,fontWeight:900,color:'#f06d16'}}>Course</Text>
           </View>
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.Sno.toString()}
        renderItem={renderItem}
      />
    </View>
    </SafeAreaView>
  );
};

export default YourComponent;



