import { View, Text, Image, SafeAreaView, TouchableHighlight,Modal, Dimensions, TouchableOpacity } from 'react-native'
import { useState } from "react";
import React, { Component } from 'react' 
import Logo from '../../assets/Images/igl-logo.png'
import Bar from '../../assets/Images/optionmaroon.png'
import edu from '../../assets/Images/edu.png'
import back from '../../assets/Images/backarrow_green.png'




const {height,width}=Dimensions.get('window')





export default class Tech extends Component
{
   
        constructor()
        {
            super();
            this.state={show:false}
        }
 
        
        render(){
  return (
    <SafeAreaView style={{marginTop:30}}>
        {/* Menu Bar */}           
        
    <View style={{flexDirection:'row',jusrtifyContent:'space-evenly',alignSelf:'center'}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}><Image source={Logo} alt='Logo' style={{width:70,height:70,aspectRatio:1.2}}/></TouchableOpacity>
      <Text style={{width:200,textAlign:'center',alignSelf:'center',fontSize:20,fontWeight:'900'}}>Insta Gana Live</Text>
       <TouchableHighlight  style={{alignSelf:'center'}} onPress={()=>{this.setState({show:true})}}>
        <Image source={Bar} alt='nav'  style={{width:50,height:50,justifyContent:'center',alignSelf:'center',}} />
      </TouchableHighlight> 
        <Modal transparent={true} visible={this.state.show}  onRequestClose={()=>this.setState({show:false})}>
      <TouchableOpacity style={{width:width,height:height}} onPress={()=>{this.setState({show:false})}}>
            
            <View style={{backgroundColor:'white',padding:10,position:'absolute',right:10,top:70,borderRadius:10}}>
                <View style={{marginTop:10}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Testimoni")}}> 
                    <Text style={{color:'#6e0202',textAlign:'center',fontWeight:'900',fontSize:19,}}>Testimonials</Text>
                </TouchableOpacity>
                </View> 
                 <View style={{marginTop:10}}>
                 <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Highlights")}}> 
                    <Text style={{color:'#6e0202',textAlign:'center',fontWeight:'900',fontSize:19}}>Highlights</Text>
                 </TouchableOpacity>
                </View>  
                <View style={{marginTop:10}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Whatsnew")}}> 
                        <Text style={{color:'#6e0202',textAlign:'center',fontWeight:'900',fontSize:19}}>Whats's New</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:10}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("About")}}> 
                    <Text style={{color:'#6e0202',textAlign:'center',fontWeight:'900',fontSize:19}}>About IGL</Text>
                </TouchableOpacity>
                </View>
                <View style={{marginTop:10,marginBottom:9}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Contact")}}> 
                    <Text style={{color:'#6e0202',textAlign:'center',fontWeight:'900',fontSize:19}}>Contact IGL</Text>
                </TouchableOpacity>
                </View>  
            </View>
        </TouchableOpacity>
        </Modal>
    </View>
    
     <View style={{flexDirection:'column',margin:20,gap:20}}>
  
     <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Edu")}}>
        <View style={{width:350,height:150,backgroundColor:'#00a394',flexDirection:'row',alignItems:'center',borderRadius:20, }}>
            <Image source={edu} alt='art' style={{width:100,height:null,aspectRatio:1.2,marginLeft:10}}/>
            <Text style={{color:'white',fontWeight:'900',fontSize:30,marginLeft:10}}>Education</Text>
        </View>
        </TouchableOpacity>
    </View> 
    
      <View style={{marginTop:200,justifyContent:'center',alignItems:'center'}}>
      <View style={{width:340,height:70,borderRadius:20,backgroundColor:'#f5f5f5',elevation:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate("College")}} style={{width:340,height:70,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{width:150,fontSize:15,fontWeight:900,marginLeft:10,color:'#00a394'}}>College</Text>
        <Image source={back} alt='to' style={{width:30,height:30,transform:[{rotate:'180deg'}]}} />
      </TouchableOpacity>

      </View>
      <View style={{marginTop:20,width:340,height:70,borderRadius:20,backgroundColor:'#f5f5f5',elevation:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Internship")}} style={{width:340,height:70,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{width:150,fontSize:15,fontWeight:900,marginLeft:10,color:'#00a394'}}>Project and Course</Text>
        <Image source={back} alt='to' style={{width:30,height:30,transform:[{rotate:'180deg'}]}} />
      </TouchableOpacity>

      </View>
      
      </View>
    
    </SafeAreaView>
  )
}
}




