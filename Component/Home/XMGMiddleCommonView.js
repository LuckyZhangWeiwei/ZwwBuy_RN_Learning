import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var CommonView=React.createClass({
    getDefaultProps(){
       return{
          title:'',
          subTitle:'',
          rightIcon:'',
          titleColor:'',
          tplurl:'',
          callBackClickCell:null
       }
    },
    render() {
        return (
        <TouchableOpacity onPress={(data)=>{this.clickCell(data)}}>
          <View style={styles.container}>
             <View>
              <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
              <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
            </View>
            <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43,resizeMode:'contain'}}/>
          </View>
          </TouchableOpacity>
              );
    },
    clickCell(data){
        // 判断处理
        if (this.props.callBackClickCell == null) return;
        // 执行回调函数
        this.props.callBackClickCell(data);
    }
});
const styles=StyleSheet.create({
   container:{
     backgroundColor:'white',
     width:width*0.5-2,
     height:59,
     marginBottom:2,
     marginRight:2,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-around'
   },
   titleStyle:{
     fontSize:18,
     fontWeight:'bold'
   },
   subTitleStyle:{
     color:'gray'
   }
})
module.exports = CommonView;