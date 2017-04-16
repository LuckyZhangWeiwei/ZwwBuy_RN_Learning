import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  WebView,
} from 'react-native';

import Headroom from 'react-native-headroom';
var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');
var HomeDetail=React.createClass({
    render() {
        const header=(
           <View style={[styles.navOutViewStyle,styles.container, styles.header]}>
                 <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.LeftImageStyle}>
                   <Image source={{uri: 'icon_camera_back_normal'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
                <Text style={{color:'white', fontSize:16,fontWeight:'bold'}}>详情</Text>
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
                 <WebView  source={{uri: 'http://www.google.com'}} style={{height: height-65}}/>
            </Headroom>
              );
    },
    popToHome(){
      this.props.navigator.pop();
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,96,0,1.0)',
    },
    content:{
         justifyContent: 'center',
         alignItems: 'center',
    },  
    loremIpsum: {
        fontSize: 24,
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

module.exports=HomeDetail;
