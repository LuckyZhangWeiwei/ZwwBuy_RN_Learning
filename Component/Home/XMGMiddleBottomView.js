import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var Home_D4=require('../../LocalData/XMG_Home_D4.json');
var CommonView = require('./XMGMiddleCommonView');

var MiddleBottomView=React.createClass({
    render() {
        return (
          <View style={styles.container}>
           <View style={styles.topViewStyle}>
            {this.renderTopItem(Home_D4.data[2])}
           </View>
           <View style={styles.bottomViewStyle}>
             {this.renderBottomItem()}
           </View>
         </View>
              );
    },
    renderBottomItem(){
      var itemArr=[];
      var dataArr=Home_D4.data;
      for(var i=0;i<dataArr.length;i++){
         var itemData=dataArr[i];
         itemArr.push(
           <CommonView
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightIcon={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl={itemData.tplurl}
                    key={i}
                    callBackClickCell={(data)=>this.popToTopView(itemData.tplurl)}
                />
         );
      }
      return itemArr;
    },
    popToTopView(data){
       this.props.popTopHome(data);
    },
    dealWithImgUrl(url){
       if (url.search('w.h') == -1){ // 没有找到,正常返回
           return url;
       }else{
           return url.replace('w.h', '120.90');
       }
    },
    renderTopItem(data){
      return(
        <View style={styles.topViewStyle}>
             <View>
              <Text style={[{color:data.typeface_color},styles.topTitleStyle]}>{data.maintitle}</Text>
              <Text style={styles.subTitleStyle}>{data.deputytitle}</Text>
            </View>
            <Image source={{uri:this.dealWithImgUrl(data.imageurl)}} style={{width:64,height:43}}/>
          </View>
      )
    }
});


const styles = StyleSheet.create({
    container: {
        marginTop:5
    },
    topViewStyle: {
         backgroundColor:'white',
         width:width,
         height:59,
         marginBottom:1,
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-around'
    },
    topTitleStyle:{
         fontSize:18,
         fontWeight:'bold'
    },
    topSubTitle:{
      color:'gray'
    },
    bottomViewStyle:{
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems:'flex-start',
      
    }
});

module.exports=MiddleBottomView;

