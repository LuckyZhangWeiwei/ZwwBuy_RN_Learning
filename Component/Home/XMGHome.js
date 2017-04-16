import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from 'react-native';

var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');

var HomeDetail=require('../Home/XMGHomeDetail');
var TopView=require('./XMGTopView');
var MiddleView=require('./XMGHomeMiddleView');
var MiddleBottomView=require('./XMGMiddleBottomView');
var ShopCenter=require('./XMGShopCenter');
var ShopCenterDetail=require('./XMGShopCenterDetailView')
var GuessYouLike=require('./XMGGuessYouLike')

var Home=React.createClass({
    render() {
        return (
          <View style={styles.container}>
              {this.renderNavBar()}
              <ScrollView
               showsVerticalScrollIndicator={false}
              >
                <TopView/>
                <MiddleView/>
                <MiddleBottomView
                 popTopHome={(data)=>{this.pushToDetail(data)}}
                />
                <ShopCenter
                  popToHomeView={(url)=>this.pushToShopCenterDetail(url)}
                />
                <GuessYouLike/>
              </ScrollView>
         </View>
              );
    },
    renderNavBar(){
      return(
          <View style={styles.navBarStyle}>
             <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
               <Text style={{color:'white',paddingLeft:3}}>广州</Text>
             </TouchableOpacity>
             <TextInput
               placeholder="输入商家，品类，商圈"
               style={styles.topInputStyle}
             />
             <View style={{flexDirection:'row'}}>
                 <TouchableOpacity>
                   <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                 </TouchableOpacity>
                 <TouchableOpacity>
                   <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                 </TouchableOpacity>
             </View>
          </View>
      );
    },
    pushToDetail(data){
       this.props.navigator.push({
          component:HomeDetail,
          title:'详情页'
       });
    },
    pushToShopCenterDetail(url){
       this.props.navigator.push({
          component:ShopCenterDetail,
          passProps:{"url":this.dealWithUrl(url)}
       });
    },
    dealWithUrl(url){
       return url.replace("imeituan://www.meituan.com/web/?url=","");
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topInputStyle:{
        width:width*0.7,
        height:35,
        backgroundColor:'white',
        borderRadius:12,
        paddingLeft:8
    },
    navRightImgStyle:{
      width:30,
      height:30
    },
    navBarStyle:{
      height:64,
      backgroundColor:'rgba(255,96,0,1)',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around'
    }
});

module.exports=Home;
