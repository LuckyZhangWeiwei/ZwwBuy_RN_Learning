﻿import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  WebView,
  ScrollView
} from 'react-native';
import Headroom from 'react-native-headroom';

var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');

var ShopCenterDetail=React.createClass({
   getInitialState(){
      return{
          detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
       }
    },
    render() {
       const header=(
             <View style={[styles.navOutViewStyle,styles.container, styles.header]}>
                 <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.LeftImageStyle}>
                   <Image source={{uri: 'icon_camera_back_normal'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
                <Text style={{color:'white', fontSize:16,fontWeight:'bold'}}>购物中心详情</Text>
                <TouchableOpacity onPress={()=>{alert('点了!')}} style={styles.rightViewStyle}>
                   <Image source={{uri: 'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
       )
       
        return (
          <Headroom
                    style={[styles.container]}
                    headerComponent={header}
                    headerHeight={60}
                    scrollEventThrottle={80}
                >
           <ScrollView>
                <WebView
                        automaticallyAdjustContentInsets={true}
                        source={{uri: this.state.detailUrl}}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        decelerationRate="normal"
                        startInLoadingState={true}
                        style={{height: 1000}}
                    />
           </ScrollView>
         </Headroom>
              );
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
     header:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,96,0,1.0)',
    },
    navImageStyle:{
       width:Platform.OS=='ios'? 28:24,
       height:Platform.OS=='ios'? 28:24,
      
    },
    rightViewStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },
    navOutViewStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center'
    },
    LeftImageStyle:{
     // 绝对定位
        position:'absolute',
        left:10,
        bottom:Platform.OS == 'ios' ? 15:13
    }
});

module.exports=ShopCenterDetail;
