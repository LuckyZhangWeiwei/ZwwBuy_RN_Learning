/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
var Main=require('./Component/Main/XMGMain');


var LaunchImage=require('./Component/Main/XMGLunchImg');
export default class ZWWBuy extends Component {
  render() {
    return (
      <Navigator
                initialRoute={{name:'Æô¶¯Ò³',component:LaunchImage}}
                configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
            />
    );
  }
}


AppRegistry.registerComponent('ZWWBuy', () => ZWWBuy);
