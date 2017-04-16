import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
var MiddleData = require('./MiddleData.json');
var MineMiddleView=React.createClass({
    render(){
       return(
         <View style={styles.container}>
           {this.renderAllItem()}
         </View>
       );
    },
    renderAllItem(){
       var itemArr=[];
       for(var i=0;i<MiddleData.length;i++){
          var data=MiddleData[i];
          itemArr.push(<InnerView key={i} iconName={data.iconName} title={data.title} />);
       }
       return itemArr;
    }
});

var InnerView=React.createClass({
    getDefaultProps(){
      return {
        iconName:'',
        title:''
      }
    },
    render(){
      return(
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('0')}}>
         <View style={styles.innerViewStyle}>
            <Image source={{uri:this.props.iconName}} style={{width:40, height:30, marginBottom:3}} />
            <Text style={{color:'gray'}}>{this.props.title}</Text>
         </View>
      </TouchableOpacity>
      );
    }
});

const styles=StyleSheet.create({
  container:{
     flexDirection:'row',
     alignItems:'center',
     backgroundColor:'white',
     justifyContent:'space-around'
  },
  innerViewStyle:{
        width:70,
        height:70,
        // 水平和垂直居中
        justifyContent:'center',
        alignItems:'center'
  }
});
module.exports=MineMiddleView;