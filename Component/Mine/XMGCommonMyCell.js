import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

var MyCell=React.createClass({
    getDefaultProps(){
       return{
        leftIconName:'',
        leftTitle:'',
        rightIconName:'',
        rightTitle:''
       }
    },
    render() {
        return (
        <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.container}>
              <View style={styles.leftViewStyle}>
                 <Image source={{uri:this.props.leftIconName}} style={styles.leftImageStyle} />
                 <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
              </View>
              <View style={styles.rightViewStyle}>
                 {this.rightSubView()}
              </View>
          </View>
         </TouchableOpacity>
              );
     },
     rightSubView(){
         return(
           <View style={{flexDirection:'row',alignItems:'center'}}>
             {this.renderRightContent()}
             <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8,marginLeft:8}}/> 
           </View>
         );
     },
     renderRightContent(){
        if(this.props.rightIconName.length==0){
           return(
             <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
           )
        }else{
           return(
           <Image source={{uri:this.props.rightIconName}} style={{width:24,height:13}} />
           )
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
   },
   leftViewStyle:{
      flexDirection:'row',
      alignItems:'center',
      marginLeft:8
   },
   rightViewStyle:{
   
   },
   leftImageStyle:{
      width:24,
       height:24,
       marginRight:6,
       borderRadius:12
   },
   leftTitleStyle:{
      fontSize:16
   }
});

module.exports=MyCell;
