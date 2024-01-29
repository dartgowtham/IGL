
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView ,Image} from 'react-native';
import data from '../../assets/Json/College.json';
import Back from '../../assets/Images/backarrow_green.png'


const YourComponent = ({navigation}) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const desc=data.IGL_Activities_Description;
  const date=data.IGL_Activities_date;
  
  const renderedData = data.map((date, index) => (
    <View key={index}>
      {/* <Text>{date.IGL_Activities_date[index]}{data.IGL_Activities_Description[index]}</Text> */}
      <Text style={{marginTop:5}}>{date.IGL_Activities_date[index]}</Text>
      <Text style={{marginTop:5,marginBottom:5}}>{date.IGL_Activities_Description[index]}</Text>
      <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 1
      }}
      />
    </View>
  ));
  const renderItem = ({ item }) => {
    const isExpanded = expandedItem === item.Sno;
    
  
  
    
    return (
      <View>
      <View style={{width:350,height:'auto',borderRadius:5,borderTopWidth:6,borderTopColor:'#00a394',marginTop:20,backgroundColor:'#F5F5F5',marginLeft:10,marginRight:10,elevation:10}}>
        <TouchableOpacity onPress={() => setExpandedItem(isExpanded ? null : item.Sno)}>
          <Text style={{ marginLeft:10,fontWeight:900,fontSize:22,color:'#00a394' }}>{item.Name}</Text>
          <Text style={{ marginLeft:10,fontWeight:900,fontSize:18 }}>{item.City},{item.Country}</Text>
          {/* <Text style={{ marginLeft:10,fontWeight:900,fontSize:22,textAlign:'center',color:'#00a394' }}></Text> */}
        </TouchableOpacity>
       
      </View>
       <View>  
        
       {isExpanded && <View style={{marginTop:15,borderRadius:20,backgroundColor:'#ffffff',padding:10,width:350,justifyContent:'center',alignSelf:'center'}}>
        {renderedData}
      </View>}   
       </View>
       </View>
    );
  };

  
  return (
    <SafeAreaView style={{marginTop:35}}>
           <View style={{flexDirection:'row',}}>
             <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}><Image source={Back} alt='Go' style={{width:40,height:40,aspectRatio:1.2}}/></TouchableOpacity>
             <Text style={{width:300,alignSelf:'center',fontSize:25,fontWeight:900,color:'#00a394'}}>College</Text>
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



2