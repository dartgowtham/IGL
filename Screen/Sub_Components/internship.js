
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView ,Image} from 'react-native';
import data from '../../assets/Json/intern.json';
import Back from '../../assets/Images/backarrow_green.png'
// import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';


const Internship = ({navigation}) => {
  const [expandedItem, setExpandedItem] = useState(null);
   
  const renderItem = ({ item }) => {
    const isExpanded = expandedItem === item.Sno;
    
    return (
      <View>
      <View style={{width:350,height:'auto',padding:10,borderRadius:5,borderTopWidth:6,borderTopColor:'#00a394',marginTop:20,backgroundColor:'#F5F5F5',marginLeft:10,marginRight:10,elevation:10}}>
        <TouchableOpacity onPress={() => setExpandedItem(isExpanded ? null : item.Sno)}>
          <Text style={{ marginLeft:10,fontWeight:900,fontSize:22,color:'#00a394' }}>{item.Project_Title}</Text>
          {/* <Text style={{ marginLeft:10,fontWeight:900,fontSize:22,textAlign:'center',color:'#00a394' }}></Text> */}
        </TouchableOpacity>
       
      </View>
       <View>  
      
       {isExpanded && <View style={{marginTop:15,borderRadius:20,backgroundColor:'#ffffff',padding:10,width:350,height:'auto',justifyContent:'center',alignSelf:'center'}}>
        <Text style={{fontSize:16,padding:5,fontWeight:900}}>{item.Names}</Text>
        <Text style={{fontSize:16,padding:5,fontWeight:900}}>{item.Institution}</Text>
        <Text style={{fontSize:16,padding:5,fontWeight:900}}>{item.Country},{item.City}</Text>
        <Text style={{fontSize:16,padding:5,fontWeight:900}}>{item.Date}</Text>
        <Text style={{fontSize:16,padding:5,fontWeight:900}}>{item.Sponsor}</Text>

      </View>}
     
       </View>
       </View>
    );
  };

  return (
    <SafeAreaView style={{marginTop:35}}>
           <View style={{flexDirection:'row',}}>
             <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}><Image source={Back} alt='Go' style={{width:40,height:40,aspectRatio:1.2}}/></TouchableOpacity>
             <Text style={{width:300,alignSelf:'center',fontSize:25,fontWeight:900,color:'#00a394'}}>Paid Internship Program</Text>
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

export default Internship;



