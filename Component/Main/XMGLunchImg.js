import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var Main = require('./XMGMain');

var Launch=React.createClass({
    render() {
        return (
          <Image source={{uri:'launchimage'}} 
          style={styles.launchImageStyle}
          />
              );
         },
   componentDidMount(){
        setTimeout(()=>{
          this.props.navigator.replace({
             component:Main
          })
        },2000)
   }
});


const styles = StyleSheet.create({
    launchImageStyle:{
      flex:1,
    }
});

module.exports=Launch;
