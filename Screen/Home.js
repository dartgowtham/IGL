import { View, Text, Image, SafeAreaView, TouchableHighlight,Modal, Dimensions, TouchableOpacity } from 'react-native'
import { useState } from "react";
import React, { Component } from 'react' 
import Logo from '../assets/Images/igl-logo.png'
import Bar from '../assets/Images/optionmaroon.png' 
import art from '../assets/Images/art.png' 
import tech from '../assets/Images/tech.png' 
import edu from '../assets/Images/edu.png' 
// import { useFonts } from 'expo-font'
import cha from '../assets/Images/cha.png'  
import useFonts from '../hooks';
import AppLoading from 'expo-app-loading';


// import Realm from 'realm';
// import whatsnew  from '../Models/whatsnew';

const {height,width}=Dimensions.get('window')




export default class Home extends Component
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
      <Image source={Logo} alt='Logo' style={{width:80,height:80,aspectRatio:1.2}}/>
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
        
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Arts")}}>
        <View style={{width:350,height:150,backgroundColor:'#f06d16',flexDirection:'row',alignItems:'center',borderRadius:20, }}>
            <Image source={art} alt='art' style={{width:100,height:100,marginLeft:10}}/>
            <Text style={{color:'white',fontWeight:'900',fontSize:30,marginLeft:10,}}>Arts & Music</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Tech")}}>
        <View style={{width:350,height:150,backgroundColor:'#097ab8',flexDirection:'row',alignItems:'center',borderRadius:20, }}>
            <Image source={tech} alt='art' style={{width:100,height:null,aspectRatio:1.7,marginLeft:10}}/>
            <Text style={{color:'white',fontWeight:'900',fontSize:30,marginLeft:10,fontFamily:'baloo'}}>Technology</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Edu")}}>
        <View style={{width:350,height:150,backgroundColor:'#00a394',flexDirection:'row',alignItems:'center',borderRadius:20, }}>
            <Image source={edu} alt='art' style={{width:100,height:null,aspectRatio:1.2,marginLeft:10}}/>
            <Text style={{color:'white',fontWeight:'900',fontSize:30,marginLeft:10}}>Education</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Charity")}}>
        <View style={{width:350,height:150,backgroundColor:'#d40404',flexDirection:'row',alignItems:'center',borderRadius:20, }}>
            <Image source={cha} alt='art' style={{marginLeft:10,aspectRatio:1.3,width:100,height:null}} />
            <Text style={{color:'white',fontWeight:'900',fontSize:30,marginLeft:10}}>Charity</Text>
        </View>
        </TouchableOpacity>
      
    </View> 
    </SafeAreaView>
  )
}
}




