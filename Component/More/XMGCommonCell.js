import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Switch
} from 'react-native';

var CommonCell=React.createClass({
    getDefaultProps(){
       return{
         title:'',
         isSwitch:false,
         rightTitle:''
       }
    },
    getInitialState(){
       return{
         isOn:false
       }
    },
    render() {
        return (
        <TouchableOpacity onPress={()=>{alert(this.props.title)}}>
         <View style={styles.container}>
           <Text style={{marginLeft:5}}>{this.props.title}</Text> 
           {this.renderRightView()}
           
         </View>
         </TouchableOpacity>
              );
     },
     renderRightView(){
       if(this.props.isSwitch){
         return(
           <Switch value={this.state.isOn==true} onValueChange={()=>{this.setState({isOn: !this.state.isOn})}} style={{marginRight:5}}/>
         )
       }else{
         return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
               {this.rightTitle()}
               <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:5}}/> 
            </View>
         )
       }
     },
     rightTitle(){
       if(this.props.rightTitle.length>0){
          return(
            <Text style={{color:'gray',marginRight:3}}>{this.props.rightTitle}</Text>
          );
       }
     }
});


const styles = StyleSheet.create({
   container:{
     height:40,
     backgroundColor:'white',
     borderBottomColor:'#dddddd',
     borderBottomWidth:0.5,

     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center'
   }
});

module.exports=CommonCell;
