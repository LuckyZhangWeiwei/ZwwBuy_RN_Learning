import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

var CommonCell=require('./XMGBottomCommonCell');
var Home_D5=require('../../LocalData/XMG_Home_D5.json');

var ShopCenter=React.createClass({
    getDefaultProps(){
       return{
         popToHomeView:null
       }
    },
    render() {
        return (
          <View style={styles.container}>
            <CommonCell
                leftIcon="gw"
                leftTitle="购物中心"
                rightTitle={Home_D5.tips}
            />
            <ScrollView 
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               style={styles.scrollViewStyle}>
               {this.renderAllItems()}
            </ScrollView>
         </View>
              );
     },
     renderAllItems(){
        var itemArr=[];
        var shopData=Home_D5.data;
        for(var i=0;i<shopData.length;i++){
           var data=shopData[i];
           itemArr.push(
              <ShopCenterItem
                 shopImage={data.img}
                 shopSale={data.showtext.text}
                 shopName={data.name}
                 key={i}
                 detailUrl={data.detailurl}
                 popToShopCenter={(url)=>this.popTopHome(url)}
               />
           );
        }
        return itemArr;
     },
     popTopHome(url){
       if(this.props.popToHomeView==null) return;
        this.props.popToHomeView(url);
     }
});

var ShopCenterItem=React.createClass({
    getDefaultProps(){
       return{
         shopImage:'',
         shopSale:'',
         shopName:'',
         detailUrl:'',
         popToShopCenter:null
       }
    },
    render(){
       return(
         <TouchableOpacity onPress={(url)=>this.clickItem(this.props.detailUrl)}>
           <View style={styles.itemViewStyle}>
             <Image source={{uri:this.props.shopImage}} style={styles.imageSytle}/>
             <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
             <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
           </View>
         </TouchableOpacity>
       );
    },
    clickItem(url){
       if(this.props.detailUrl==null) return;

       this.props.popToShopCenter(url);
        
    }
})

const styles = StyleSheet.create({
    container: {
        marginTop:10
    },
   scrollViewStyle:{
      flexDirection:'row',
      backgroundColor:'white',
      padding:10
   },
    imageSytle:{
        width:120,
        height:100,
        borderRadius:6
    },
    itemViewStyle:{
       margin:8
    },
    shopSaleStyle:{
      position:'absolute',
      left:0,
      bottom:30,
      backgroundColor:'red',
      color:'white',
      padding:3,
      borderTopRightRadius:6,
      borderBottomRightRadius:6
    },
    shopNameStyle:{
      textAlign:'center',
      marginTop:3
    }
});

module.exports=ShopCenter;
